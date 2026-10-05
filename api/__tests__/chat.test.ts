import { describe, expect, it } from "vitest";
import { collectSseReply, extractAssistantContent } from "../chat";

describe("api/chat helpers", () => {
  it("extracts assistant content from a non-stream completion", () => {
    const content = extractAssistantContent({
      choices: [{ message: { role: "assistant", content: "Hola desde Nemotron" } }],
    });
    expect(content).toBe("Hola desde Nemotron");
  });

  it("joins visible SSE content and ignores reasoning chunks", async () => {
    const sse = [
      'data: {"choices":[{"delta":{"reasoning_content":"pensando"}}]}',
      'data: {"choices":[{"delta":{"content":"Hola"}}]}',
      'data: {"choices":[{"delta":{"content":" Ktalweb"}}]}',
      "data: [DONE]",
      "",
    ].join("\n");

    const stream = new ReadableStream<Uint8Array>({
      start(controller) {
        controller.enqueue(new TextEncoder().encode(sse));
        controller.close();
      },
    });

    const reply = await collectSseReply(stream);
    expect(reply).toBe("Hola Ktalweb");
  });
});
