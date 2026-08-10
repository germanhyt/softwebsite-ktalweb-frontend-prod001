import http from "node:http";
import handler from "../api/chat";

const PORT = Number(process.env.CHAT_API_PORT) || 3001;

const server = http.createServer((req, res) => {
  const url = req.url ?? "/";
  if (url === "/api/chat" || url.startsWith("/api/chat?")) {
    void handler(req, res);
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Not found");
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`[dev-chat-api] listening on http://127.0.0.1:${PORT}/api/chat`);
});
