import { describe, expect, it } from "vitest";
import { collectStreamReply } from "../chat";

async function* fakeStream(
  chunks: Array<{ content?: string; reasoning_content?: string }>
) {
  for (const delta of chunks) {
    yield { choices: [{ delta }] };
  }
}

describe("api/chat stream collector", () => {
  it("joins visible content and ignores reasoning_content", async () => {
    const reply = await collectStreamReply(
      fakeStream([
        { reasoning_content: "pensando…" },
        { content: "Hola" },
        { content: ", soy " },
        { reasoning_content: "más thinking" },
        { content: "Ktalweb." },
      ])
    );

    expect(reply).toBe("Hola, soy Ktalweb.");
  });

  it("returns empty string when the stream has no visible content", async () => {
    const reply = await collectStreamReply(
      fakeStream([{ reasoning_content: "solo thinking" }, { content: "" }])
    );
    expect(reply).toBe("");
  });
});
