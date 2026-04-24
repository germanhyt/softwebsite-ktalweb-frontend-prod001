import React, { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoClose, IoSend } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { whatsappHref } from "@/core/site-contact";

type ChatRole = "user" | "assistant";

type ChatMessage = { role: ChatRole; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hola, soy el asistente de Ktalweb. Cuéntame qué necesitas (web, tienda, catálogo u otro proyecto) y te oriento. Si prefieres, usa una sugerencia abajo.",
};

const SUGGESTIONS = [
  "¿Qué solución me conviene para mi negocio?",
  "Quiero cotizar una landing page",
  "Necesito una tienda virtual",
  "¿Cómo trabajan y cuánto demora un proyecto?",    
];

const WHATSAPP_LINK = whatsappHref(
  "Hola Ktalweb, les escribo desde el chat de su web y quiero hablar con un asesor."
);

function markdownComponents(variant: "user" | "assistant"): Components {
  const linkClass =
    variant === "user"
      ? "font-semibold text-white underline decoration-white/85 underline-offset-2 break-all hover:decoration-white"
      : "font-semibold text-[#5919c1] underline underline-offset-2 break-all hover:text-[#4a1499]";

  const strongClass = variant === "user" ? "font-bold text-white" : "font-bold text-gray-900";

  return {
    p: ({ children }) => (
      <p className="mb-2 last:mb-0 leading-relaxed [&:not(:first-child)]:mt-2">{children}</p>
    ),
    strong: ({ children }) => <strong className={strongClass}>{children}</strong>,
    em: ({ children }) => <em className="italic opacity-95">{children}</em>,
    a: ({ href, children }) => {
      if (!href) return <>{children}</>;
      const allowed =
        href.startsWith("https:") || href.startsWith("http:") || href.startsWith("mailto:");
      if (!allowed) return <>{children}</>;
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {children}
        </a>
      );
    },
    ul: ({ children }) => (
      <ul className="mb-2 list-disc space-y-1 pl-4 last:mb-0 marker:text-current">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-2 list-decimal space-y-1 pl-4 last:mb-0 marker:text-current">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    code: ({ className, children }) => {
      const isBlock = Boolean(className?.includes("language-"));
      if (isBlock) {
        return (
          <code className="my-2 block max-w-full overflow-x-auto rounded-lg bg-black/10 px-2 py-1.5 text-xs">
            {children}
          </code>
        );
      }
      return (
        <code className="rounded bg-black/15 px-1 py-0.5 text-[0.88em] [word-break:break-word]">
          {children}
        </code>
      );
    },
    h1: ({ children }) => <p className="mb-2 text-base font-bold leading-snug">{children}</p>,
    h2: ({ children }) => <p className="mb-2 text-[0.95rem] font-bold leading-snug">{children}</p>,
    h3: ({ children }) => <p className="mb-1 text-[0.9rem] font-semibold leading-snug">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-2 border-l-2 border-[#7b3ff2]/50 pl-2 text-gray-700">
        {children}
      </blockquote>
    ),
  };
}

function ChatMessageMarkdown({
  content,
  variant,
}: {
  content: string;
  variant: "user" | "assistant";
}) {
  return (
    <div
      className={
        variant === "assistant"
          ? "text-sm text-gray-900 [&_a]:text-[#5919c1]"
          : "text-sm text-white [&_a]:text-white"
      }
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents(variant)}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

async function postChat(history: ChatMessage[]): Promise<string> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: history.map((m) => ({ role: m.role, content: m.content })),
    }),
  });
  const data = (await res.json().catch(() => ({}))) as { reply?: string; error?: string };
  if (!res.ok) {
    throw new Error(data.error ?? "No se pudo obtener respuesta");
  }
  if (!data.reply) {
    throw new Error("Respuesta vacía");
  }
  return data.reply;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open, loading]);

  const sendWithHistory = async (nextHistory: ChatMessage[]) => {
    setLoading(true);
    setError(null);
    try {
      const reply = await postChat(nextHistory);
      setMessages([...nextHistory, { role: "assistant", content: reply }]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
      setMessages(nextHistory);
    } finally {
      setLoading(false);
    }
  };


  const handleSend = async (text?: string) => {
    const raw = (text ?? input).trim();
    if (!raw || loading) return;
    setInput("");
    const userMsg: ChatMessage = { role: "user", content: raw };
    const withoutWelcomeEcho = [...messages, userMsg];
    setMessages(withoutWelcomeEcho);
    await sendWithHistory(withoutWelcomeEcho);
  };

  const showSuggestions =
    messages.length === 1 && messages[0]?.role === "assistant" && !loading && !error;

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-2 font-nunito">
      {open && (
        <div
          id="ktalweb-chat-dialog"
          className="flex h-[min(32rem,calc(100vh-6rem))] w-[min(100vw-1.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl shadow-violet-900/15"
          role="dialog"
          aria-label="Chat con Ktalweb"
        >
          <div className="flex items-center justify-between gap-2 bg-[#7b3ff2] px-4 py-3 text-white">
            <div className="flex items-center gap-2 min-w-0">
              <IoChatbubbleEllipsesOutline className="shrink-0 text-xl opacity-95" aria-hidden />
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-tight">Ktalweb</div>
                <div className="text-xs text-white/85 leading-tight">Asistente en línea</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Cerrar chat"
            >
              <IoClose className="text-xl" />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3 text-sm text-gray-900"
          >
            {messages.map((m, i) => (
              <div
                key={`${i}-${m.role}-${m.content.slice(0, 24)}`}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[92%] rounded-2xl rounded-br-md bg-[#7b3ff2] px-3 py-2 text-white"
                      : "max-w-[92%] rounded-2xl rounded-bl-md bg-violet-50 px-3 py-2 text-gray-900"
                  }
                >
                  <ChatMessageMarkdown content={m.content} variant={m.role} />
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-violet-50 px-3 py-2 text-gray-600">
                  Escribiendo…
                </div>
              </div>
            )}
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs text-red-800">
                {error}
              </div>
            )}
          </div>

          {showSuggestions && (
            <div className="border-t border-violet-100 px-3 py-2">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                Sugerencias
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => void handleSend(s)}
                    className="rounded-full border border-violet-200 bg-white px-3 py-1.5 text-left text-xs text-gray-800 hover:border-[#7b3ff2] hover:text-[#5919c1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3ff2]/40"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-violet-100 p-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2 text-sm font-semibold text-white hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50"
            >
              <FaWhatsapp className="text-lg" aria-hidden />
              WhatsApp con un asesor
            </a>
            <div className="flex gap-2">
              <label className="sr-only" htmlFor="ktalweb-chat-input">
                Escribe tu mensaje
              </label>
              <input
                id="ktalweb-chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void handleSend();
                  }
                }}
                placeholder="Escribe tu mensaje…"
                disabled={loading}
                className="min-w-0 flex-1 rounded-xl border border-violet-100 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#7b3ff2] focus:ring-2 focus:ring-[#7b3ff2]/25 disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => void handleSend()}
                disabled={loading || !input.trim()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#7b3ff2] text-white hover:bg-[#6a35d6] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7b3ff2]/50"
                aria-label="Enviar mensaje"
              >
                <IoSend className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7b3ff2] text-white shadow-lg shadow-violet-900/25 hover:bg-[#6a35d6] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7b3ff2]/35"
        aria-expanded={open}
        aria-controls="ktalweb-chat-dialog"
        aria-label={open ? "Cerrar chat" : "Abrir chat con Ktalweb"}
      >
        {open ? <IoClose className="text-2xl" /> : <IoChatbubbleEllipsesOutline className="text-2xl" />}
      </button>
    </div>
  );
}
