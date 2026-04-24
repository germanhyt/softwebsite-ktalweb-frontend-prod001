import type { APIRoute } from "astro";
import { buildSystemPrompt } from "@/core/ai/system-prompt";

function envOrUndefined(v: string | undefined): string | undefined {
  const t = typeof v === "string" ? v.trim() : "";
  return t.length > 0 ? t : undefined;
}

const DEEPSEEK_URL =
  envOrUndefined(import.meta.env.DEEPSEEK_API_URL) ??
  "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL = envOrUndefined(import.meta.env.DEEPSEEK_MODEL) ?? "deepseek-chat";

/** Por debajo del límite típico de Vercel Hobby (~10s) para devolver JSON en lugar de FUNCTION_INVOCATION_FAILED. */
const UPSTREAM_FETCH_MS = Math.min(
  Math.max(Number(import.meta.env.CHAT_UPSTREAM_MS) || 8500, 3000),
  55_000
);

const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_IN_REQUEST = 24;
const MAX_MESSAGES_TO_MODEL = 14;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 25;

type ChatRole = "user" | "assistant";

type IncomingMessage = { role: ChatRole; content: string };

const rateBuckets = new Map<string, { count: number; windowStart: number }>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
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

export const POST: APIRoute = async ({ request }) => {
  try {
    return await handleChatPost(request);
  } catch (err) {
    console.error("[api/chat] error no controlado:", err);
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor. Revisa los logs en Vercel o inténtalo más tarde.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

async function handleChatPost(request: Request): Promise<Response> {
  const apiKey = envOrUndefined(import.meta.env.DEEPSEEK_API_KEY);
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          "Falta DEEPSEEK_API_KEY. Crea un archivo .env en la raíz del proyecto con tu clave.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  if (!allowRateLimit(clientIp(request))) {
    return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Intenta en un minuto." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Cuerpo inválido" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("messages" in body) ||
    !Array.isArray((body as { messages: unknown }).messages)
  ) {
    return new Response(JSON.stringify({ error: "Se esperaba { messages: [...] }" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const raw = (body as { messages: IncomingMessage[] }).messages;
  if (raw.length > MAX_MESSAGES_IN_REQUEST) {
    return new Response(JSON.stringify({ error: "Historial demasiado largo" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const messages: IncomingMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== "object") continue;
    if (m.role !== "user" && m.role !== "assistant") continue;
    if (typeof m.content !== "string") continue;
    const trimmed = m.content.trim();
    if (!trimmed) continue;
    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      return new Response(JSON.stringify({ error: "Mensaje demasiado largo" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    messages.push({ role: m.role, content: trimmed });
  }

  if (messages.length === 0 || messages[messages.length - 1]?.role !== "user") {
    return new Response(JSON.stringify({ error: "Se requiere un mensaje de usuario final" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const payload = {
    model: DEEPSEEK_MODEL,
    messages: [
      { role: "system" as const, content: buildSystemPrompt() },
      ...trimMessages(messages).map((m) => ({ role: m.role, content: m.content })),
    ],
    temperature: 0.6,
    max_tokens: 700,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), UPSTREAM_FETCH_MS);

  let res: Response;
  try {
    res = await fetch(DEEPSEEK_URL, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
  } catch (e) {
    const name = e instanceof Error ? e.name : "";
    const isAbort = name === "AbortError";
    console.error("DeepSeek fetch error:", e);
    return new Response(
      JSON.stringify({
        error: isAbort
          ? "El servicio de IA tardó demasiado. Vuelve a intentar o escribe por WhatsApp."
          : "No se pudo contactar al servicio de IA",
      }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    console.error("DeepSeek API error:", res.status, errText);
    return new Response(JSON.stringify({ error: "Respuesta no válida del proveedor de IA" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  let data: unknown;
  try {
    data = await res.json();
  } catch {
    return new Response(JSON.stringify({ error: "No se pudo leer la respuesta del proveedor" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const content = extractAssistantContent(data);
  if (!content) {
    return new Response(JSON.stringify({ error: "Respuesta vacía del modelo" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ reply: content.trim() }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
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

/** Algunas APIs devuelven `content` como string o como lista de fragmentos. */
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
      const o = part as Record<string, unknown>;
      if (typeof o.text === "string") parts.push(o.text);
      else if (typeof o.content === "string") parts.push(o.content);
    }
    return parts.length > 0 ? parts.join("") : null;
  }
  return null;
}
