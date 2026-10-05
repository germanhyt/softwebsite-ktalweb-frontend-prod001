import OpenAI from "openai";
import { buildSystemPrompt } from "../src/core/ai/system-prompt";

type ChatRole = "user" | "assistant";

type IncomingMessage = { role: ChatRole; content: string };

const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_IN_REQUEST = 24;
const MAX_MESSAGES_TO_MODEL = 14;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 25;

const DEFAULT_BASE_URL = "https://integrate.api.nvidia.com/v1";
const DEFAULT_MODEL = "nvidia/nemotron-3-ultra-550b-a55b";

const rateBuckets = new Map<string, { count: number; windowStart: number }>();

function envOrUndefined(v: string | undefined): string | undefined {
  const trimmed = typeof v === "string" ? v.trim() : "";
  return trimmed.length > 0 ? trimmed : undefined;
}

function runtimeEnv(key: string): string | undefined {
  return envOrUndefined(process.env[key]);
}

function getApiKey(): string | undefined {
  return runtimeEnv("NVIDIA_API_KEY") ?? runtimeEnv("DEEPSEEK_API_KEY");
}

/** Base URL del cliente OpenAI-compatible (sin /chat/completions). */
function getBaseUrl(): string {
  const raw =
    runtimeEnv("NVIDIA_BASE_URL") ??
    runtimeEnv("NVIDIA_API_URL") ??
    runtimeEnv("DEEPSEEK_API_URL") ??
    DEFAULT_BASE_URL;

  return raw.replace(/\/chat\/completions\/?$/i, "").replace(/\/$/, "");
}

function getModel(): string {
  return runtimeEnv("NVIDIA_MODEL") ?? runtimeEnv("DEEPSEEK_MODEL") ?? DEFAULT_MODEL;
}

function getUpstreamFetchMs(): number {
  return Math.min(Math.max(Number(runtimeEnv("CHAT_UPSTREAM_MS")) || 45_000, 3000), 55_000);
}

function getTemperature(): number {
  const value = Number(runtimeEnv("CHAT_TEMPERATURE"));
  return Number.isFinite(value) ? value : 1;
}

function getTopP(): number {
  const value = Number(runtimeEnv("CHAT_TOP_P"));
  return Number.isFinite(value) ? value : 0.95;
}

function getMaxTokens(): number {
  const value = Number(runtimeEnv("CHAT_MAX_TOKENS"));
  return Number.isFinite(value) ? Math.min(Math.max(value, 128), 16_384) : 2048;
}

function json(res: any, status: number, body: Record<string, unknown>) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(body));
}

function clientIp(req: any): string {
  const forwarded = req.headers?.["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0]?.trim() || "unknown";
  if (Array.isArray(forwarded) && forwarded[0]) return forwarded[0];
  const realIp = req.headers?.["x-real-ip"];
  return typeof realIp === "string" ? realIp : "unknown";
}

function allowRateLimit(key: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.windowStart > RATE_WINDOW_MS) {
    rateBuckets.set(key, { count: 1, windowStart: now });
    return true;
  }
  if (bucket.count >= RATE_MAX) return false;
  bucket.count += 1;
  return true;
}

function trimMessages(messages: IncomingMessage[]): IncomingMessage[] {
  const end = messages.length;
  const start = Math.max(0, end - MAX_MESSAGES_TO_MODEL);
  return messages.slice(start);
}

function readJsonBody(req: any): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk: Buffer | string) => {
      raw += chunk.toString();
    });

    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

function createNvidiaClient(apiKey: string) {
  return new OpenAI({
    apiKey,
    baseURL: getBaseUrl(),
  });
}

type StreamDelta = {
  content?: string | null;
  reasoning_content?: string | null;
};

/** Acumula solo el contenido visible; el thinking (reasoning_content) no se expone al visitante. */
export async function collectStreamReply(
  stream: AsyncIterable<{ choices?: Array<{ delta?: StreamDelta }> }>
): Promise<string> {
  let content = "";
  for await (const chunk of stream) {
    const delta = chunk.choices?.[0]?.delta;
    if (typeof delta?.content === "string" && delta.content) {
      content += delta.content;
    }
  }
  return content.trim();
}

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.setHeader("Allow", "POST, OPTIONS");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST, OPTIONS");
    res.end("Method Not Allowed");
    return;
  }

  try {
    const response = await handleChatPost(req);
    json(res, response.status, response.body);
  } catch (error) {
    console.error("[api/chat] error no controlado:", error);
    json(res, 500, {
      error: "Error interno del servidor. Revisa los logs en Vercel o inténtalo más tarde.",
    });
  }
}

async function handleChatPost(
  req: any
): Promise<{ status: number; body: Record<string, unknown> }> {
  const apiKey = getApiKey();
  if (!apiKey) {
    return {
      status: 503,
      body: {
        error:
          "Falta NVIDIA_API_KEY. En local usa .env; en Vercel: Settings -> Environment Variables (Production) y vuelve a desplegar.",
      },
    };
  }

  if (!allowRateLimit(clientIp(req))) {
    return {
      status: 429,
      body: { error: "Demasiadas solicitudes. Intenta en un minuto." },
    };
  }

  let body: unknown;
  try {
    body = await readJsonBody(req);
  } catch {
    return {
      status: 400,
      body: { error: "Cuerpo inválido" },
    };
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("messages" in body) ||
    !Array.isArray((body as { messages: unknown }).messages)
  ) {
    return {
      status: 400,
      body: { error: "Se esperaba { messages: [...] }" },
    };
  }

  const raw = (body as { messages: IncomingMessage[] }).messages;
  if (raw.length > MAX_MESSAGES_IN_REQUEST) {
    return {
      status: 400,
      body: { error: "Historial demasiado largo" },
    };
  }

  const messages: IncomingMessage[] = [];
  for (const message of raw) {
    if (!message || typeof message !== "object") continue;
    if (message.role !== "user" && message.role !== "assistant") continue;
    if (typeof message.content !== "string") continue;
    const trimmed = message.content.trim();
    if (!trimmed) continue;
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      return {
        status: 400,
        body: { error: "Mensaje demasiado largo" },
      };
    }
    messages.push({ role: message.role, content: trimmed });
  }

  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return {
      status: 400,
      body: { error: "Se requiere un mensaje de usuario final" },
    };
  }

  const openai = createNvidiaClient(apiKey);
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), getUpstreamFetchMs());

  try {
    const completion = await openai.chat.completions.create(
      {
        model: getModel(),
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...trimMessages(messages).map((message) => ({
            role: message.role,
            content: message.content,
          })),
        ],
        temperature: getTemperature(),
        top_p: getTopP(),
        max_tokens: getMaxTokens(),
        stream: true,
        // Parámetro NVIDIA Nemotron (thinking interno; no se muestra al visitante).
        chat_template_kwargs: { enable_thinking: true },
      } as OpenAI.Chat.ChatCompletionCreateParamsStreaming,
      { signal: controller.signal }
    );

    const content = await collectStreamReply(completion);
    if (!content) {
      return {
        status: 502,
        body: { error: "Respuesta vacía del modelo" },
      };
    }

    return {
      status: 200,
      body: { reply: content },
    };
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    const message = error instanceof Error ? error.message : String(error);
    const isAbort = name === "AbortError" || /aborted|timeout/i.test(message);
    console.error("NVIDIA/LLM error:", error);
    return {
      status: 502,
      body: {
        error: isAbort
          ? "El servicio de IA tardó demasiado. Vuelve a intentar o escribe por WhatsApp."
          : "No se pudo contactar al servicio de IA",
      },
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
