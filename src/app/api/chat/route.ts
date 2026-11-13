import { NextRequest, NextResponse } from "next/server";
import { POLYTREAT_KNOWLEDGE_SYSTEM_PROMPT } from "@/data/polytreatKnowledge";

export const runtime = "nodejs";

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

// Priority list of Gemini models
const GEMINI_MODELS = [
  "gemini-3.5-flash",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
];

// Priority list of OpenCode models (OpenAI-compatible)
const OPENCODE_MODELS = [
  "deepseek-v4.1-flash-free",
  "gpt-5.4-mini",
  "mimo-v2.6-flash-free",
  "glm-5.3-flash-free",
];

/**
 * Call Google Gemini with streaming SSE
 */
async function callGeminiStream(
  apiKey: string,
  messages: Message[]
): Promise<Response | null> {
  const recentMessages = messages.slice(-8);
  const contents = recentMessages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  const payload = {
    system_instruction: {
      parts: [{ text: POLYTREAT_KNOWLEDGE_SYSTEM_PROMPT }],
    },
    contents,
    generationConfig: {
      temperature: 0.6,
      topP: 0.9,
      maxOutputTokens: 800,
    },
  };

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok && res.body) {
        // Transform Gemini's SSE format into clean text stream
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        let buffer = "";

        const transformStream = new TransformStream({
          transform(chunk, controller) {
            buffer += decoder.decode(chunk, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed.startsWith("data: ")) {
                const jsonStr = trimmed.slice(6);
                if (!jsonStr || jsonStr === "[DONE]") continue;

                try {
                  const parsed = JSON.parse(jsonStr);
                  let textChunk =
                    parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (textChunk) {
                    textChunk = textChunk.replace(/https?:\/\/localhost(:\d+)?/gi, "");
                    controller.enqueue(encoder.encode(textChunk));
                  }
                } catch {
                  // Wait for complete json
                }
              }
            }
          },
          flush(controller) {
            if (buffer.trim().startsWith("data: ")) {
              try {
                const parsed = JSON.parse(buffer.trim().slice(6));
                let textChunk =
                  parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (textChunk) {
                  textChunk = textChunk.replace(/https?:\/\/localhost(:\d+)?/gi, "");
                  controller.enqueue(encoder.encode(textChunk));
                }
              } catch {}
            }
          },
        });

        return new Response(res.body.pipeThrough(transformStream), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
            "Transfer-Encoding": "chunked",
          },
        });
      }
    } catch (e) {
      console.warn(`[Gemini] Error trying model ${model}:`, e);
    }
  }

  return null;
}

/**
 * Call OpenCode (OpenAI-compatible inference) with streaming SSE
 */
async function callOpenCodeStream(
  apiKey: string,
  messages: Message[]
): Promise<Response | null> {
  const recentMessages = messages.slice(-8);

  const formattedMessages = [
    { role: "system", content: POLYTREAT_KNOWLEDGE_SYSTEM_PROMPT },
    ...recentMessages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  ];

  for (const model of OPENCODE_MODELS) {
    try {
      const url = "https://opencode.ai/inference/openai/v1/chat/completions";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: formattedMessages,
          stream: true,
          temperature: 0.6,
          max_tokens: 800,
        }),
      });

      if (res.ok && res.body) {
        // Transform OpenAI-compatible SSE format into clean text stream
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        let buffer = "";

        const transformStream = new TransformStream({
          transform(chunk, controller) {
            buffer += decoder.decode(chunk, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed.startsWith("data: ")) {
                const jsonStr = trimmed.slice(6);
                if (!jsonStr || jsonStr === "[DONE]") continue;

                try {
                  const parsed = JSON.parse(jsonStr);
                  let textDelta = parsed?.choices?.[0]?.delta?.content;
                  if (textDelta) {
                    textDelta = textDelta.replace(/https?:\/\/localhost(:\d+)?/gi, "");
                    controller.enqueue(encoder.encode(textDelta));
                  }
                } catch {
                  // Partial JSON
                }
              }
            }
          },
          flush(controller) {
            if (buffer.trim().startsWith("data: ")) {
              try {
                const parsed = JSON.parse(buffer.trim().slice(6));
                let textDelta = parsed?.choices?.[0]?.delta?.content;
                if (textDelta) {
                  textDelta = textDelta.replace(/https?:\/\/localhost(:\d+)?/gi, "");
                  controller.enqueue(encoder.encode(textDelta));
                }
              } catch {}
            }
          },
        });

        return new Response(res.body.pipeThrough(transformStream), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "no-cache",
            "Transfer-Encoding": "chunked",
          },
        });
      }
    } catch (e) {
      console.warn(`[OpenCode] Error trying model ${model}:`, e);
    }
  }

  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: Message[] = body.messages || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array required." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || !lastMessage.content?.trim()) {
      return NextResponse.json(
        { error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    if (lastMessage.content.length > 2000) {
      return NextResponse.json(
        { error: "Message too long. Please shorten your question to under 2000 characters." },
        { status: 400 }
      );
    }

    const geminiKey = process.env.GEMINI_API_KEY?.trim();
    const openCodeKey = (
      process.env.OPENCODE_API_KEY ||
      process.env.Opencode_API_key ||
      ""
    ).trim();

    // If neither key is provided, return friendly fallback
    if (!geminiKey && !openCodeKey) {
      const fallbackResponse =
        "👋 Welcome to **PolyTreat Chemicals**!\n\n" +
        "I am your AI technical advisor. In the meantime, feel free to explore our core catalogues:\n" +
        "- 🛡️ **[COROSIL Rust Converter](/specialty/corosil)** — Direct-to-rust primer\n" +
        "- 🍃 **[POLYDOR-WS Neutraliser](/specialty/polydor-ws)** — Industrial odor eliminator\n" +
        "- 💧 **[Industrial Water Treatment](/solutions/industrial-water)** — Boiler, cooling & RO chemicals\n" +
        "- ✨ **[V-Klin Cleaning Range](/vklin)** — Facility & institutional hygiene\n" +
        "- 📩 **[Contact Our Engineers](/contact)** — For quotes and technical support.";

      const encoder = new TextEncoder();
      const customReadable = new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(fallbackResponse));
          controller.close();
        },
      });

      return new Response(customReadable, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache",
        },
      });
    }

    // 1. Primary Attempt: Google Gemini (Fastest, verified active free tier quota)
    if (geminiKey && geminiKey !== "your_gemini_api_key_here") {
      const geminiResponse = await callGeminiStream(geminiKey, messages);
      if (geminiResponse) {
        return geminiResponse;
      }
      console.warn("Primary provider (Gemini) failed or rate-limited. Attempting fallback...");
    }

    // 2. Secondary Fallback: OpenCode API
    if (openCodeKey) {
      const openCodeResponse = await callOpenCodeStream(openCodeKey, messages);
      if (openCodeResponse) {
        return openCodeResponse;
      }
      console.warn("Secondary provider (OpenCode) failed or has insufficient balance.");
    }

    // 3. Graceful error if both providers fail
    return NextResponse.json(
      {
        error:
          "All AI assistant providers are currently busy. Please wait a moment and click Retry, or contact our technical team at info@polytreat.com.",
      },
      { status: 503 }
    );
  } catch (err: unknown) {
    console.error("Chat API unhandled error:", err);
    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred. Please check your network connection and try again.",
      },
      { status: 500 }
    );
  }
}
