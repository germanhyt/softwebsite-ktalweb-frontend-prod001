import { buildSystemPrompt } from "../src/core/ai/system-prompt";

type ChatRole = "user" | "assistant";

type IncomingMessage = { role: ChatRole; content: string };

const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_IN_REQUEST = 24;
const MAX_MESSAGES_TO_MODEL = 14;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 25;

const rateBuckets = new Map<string, { count: number; windowStart: number }>();

function envOrUndefined(v: string | undefined): string | undefined {
  const trimmed = typeof v === "string" ? v.trim() : "";
  return trimmed.length > 0 ? trimmed : undefined;
}

function runtimeEnv(
  key: "DEEPSEEK_API_KEY" | "DEEPSEEK_API_URL" | "DEEPSEEK_MODEL" | "CHAT_UPSTREAM_MS"
): string | undefined {
  return envOrUndefined(process.env[key]);
}

function getDeepSeekUrl(): string {
  return runtimeEnv("DEEPSEEK_API_URL") ?? "https://api.deepseek.com/chat/completions";
}

function getDeepSeekModel(): string {
  return runtimeEnv("DEEPSEEK_MODEL") ?? "deepseek-chat";
}

function getUpstreamFetchMs(): number {
  return Math.min(
    Math.max(Number(runtimeEnv("CHAT_UPSTREAM_MS")) || 8500, 3000),
    55_000
  );
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
  const apiKey = runtimeEnv("DEEPSEEK_API_KEY");
  if (!apiKey) {
    return {
      status: 503,
      body: {
        error:
          "Falta DEEPSEEK_API_KEY. En local usa .env; en Vercel: Settings -> Environment Variables (Production) y vuelve a desplegar.",
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

  const payload = {
    model: getDeepSeekModel(),
    messages: [
      { role: "system" as const, content: buildSystemPrompt() },
      ...trimMessages(messages).map((message) => ({
        role: message.role,
        content: message.content,
      })),
    ],
    temperature: 0.6,
    max_tokens: 700,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), getUpstreamFetchMs());

  let upstreamResponse: Response;
  try {
    upstreamResponse = await fetch(getDeepSeekUrl(), {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    const name = error instanceof Error ? error.name : "";
    const isAbort = name === "AbortError";
    console.error("DeepSeek fetch error:", error);
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

  if (!upstreamResponse.ok) {
    const errorText = await upstreamResponse.text().catch(() => "");
    console.error("DeepSeek API error:", upstreamResponse.status, errorText);
    return {
      status: 502,
      body: { error: "Respuesta no válida del proveedor de IA" },
    };
  }

  let data: unknown;
  try {
    data = await upstreamResponse.json();
  } catch {
    return {
      status: 502,
      body: { error: "No se pudo leer la respuesta del proveedor" },
    };
  }

  const content = extractAssistantContent(data);
  if (!content) {
    return {
      status: 502,
      body: { error: "Respuesta vacía del modelo" },
    };
  }

  return {
    status: 200,
    body: { reply: content.trim() },
  };
}

function extractAssistantContent(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const choices = (data as { choices?: unknown }).choices;
  if (!Array.isArray(choices) || choices.length === 0) return null;
  const first = choices[0];
  if (!first || typeof first !== "object") return null;
  const message = (first as { message?: unknown }).message;
  if (!message || typeof message !== "object") return null;
  return normalizeMessageContent((message as { content?: unknown }).content);
}

function normalizeMessageContent(content: unknown): string | null {
  if (typeof content === "string") return content;
  if (content == null) return null;
  if (Array.isArray(content)) {
    const parts: string[] = [];
    for (const part of content) {
      if (typeof part === "string") {
        parts.push(part);
        continue;
      }
      if (!part || typeof part !== "object") continue;
      const objectPart = part as Record<string, unknown>;
      if (typeof objectPart.text === "string") parts.push(objectPart.text);
      else if (typeof objectPart.content === "string") parts.push(objectPart.content);
    }
    return parts.length > 0 ? parts.join("") : null;
  }
  return null;
}
