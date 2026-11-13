"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  Sparkles,
  ChevronDown,
  Bot,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Droplets,
  Shield,
  Sparkle,
  PhoneCall,
  FileText,
} from "lucide-react";
import styles from "./ChatBot.module.css";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
}

const CATEGORIZED_PROMPTS = [
  {
    category: "Industrial Water",
    icon: Droplets,
    color: "#0284c7",
    items: [
      "Boiler scale & corrosion inhibitors",
      "Cooling tower biocides & algae control",
      "RO membrane antiscalants & CIP cleaners",
    ],
  },
  {
    category: "Specialty Formulations",
    icon: Shield,
    color: "#0d9488",
    items: [
      "What is COROSIL rust converter used for?",
      "POLYDOR-WS molecular odour neutraliser",
      "POLYKLIN HVAC coil cleaning",
    ],
  },
  {
    category: "Facility & V-Klin",
    icon: Sparkle,
    color: "#d97706",
    items: [
      "V-Klin institutional cleaners range",
      "AC duct & room odour eliminator",
    ],
  },
  {
    category: "Sales & Support",
    icon: PhoneCall,
    color: "#4f46e5",
    items: [
      "Request a Technical Data Sheet (TDS)",
      "PolyTreat factory & office locations",
    ],
  },
];

type InlineToken =
  | { type: "text"; content: string }
  | { type: "bold"; content: string }
  | { type: "link"; label: string; url: string }
  | { type: "boldLink"; label: string; url: string };

function parseInlineTokens(text: string): InlineToken[] {
  const tokenRegex =
    /(\*\*\[[^\]]+\]\([^)]+\)\*\*|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const tokens: InlineToken[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    const token = match[0];
    if (token.startsWith("**[") && token.endsWith(")**")) {
      const inner = token.slice(2, -2);
      const linkMatch = inner.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        tokens.push({ type: "boldLink", label: linkMatch[1], url: linkMatch[2] });
      } else {
        tokens.push({ type: "bold", content: inner });
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push({ type: "bold", content: token.slice(2, -2) });
    } else if (token.startsWith("[") && token.endsWith(")")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        tokens.push({ type: "link", label: linkMatch[1], url: linkMatch[2] });
      } else {
        tokens.push({ type: "text", content: token });
      }
    }
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", content: text.slice(lastIndex) });
  }

  return tokens;
}

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const normalized = text.replace(/https?:\/\/localhost(:\d+)?/gi, "");
  const tokens = parseInlineTokens(normalized);

  return tokens.map((token, i) => {
    const key = `${keyPrefix}-${i}`;
    if (token.type === "text") {
      return <React.Fragment key={key}>{token.content}</React.Fragment>;
    }
    if (token.type === "bold") {
      return (
        <strong key={key} className={styles.botBold}>
          {token.content}
        </strong>
      );
    }

    const isRelative = token.url.startsWith("/");
    const linkElement = isRelative ? (
      <Link href={token.url} className={styles.botLink}>
        {token.label}
      </Link>
    ) : (
      <a
        href={token.url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.botLink}
      >
        {token.label}
        <ExternalLink size={10} style={{ marginLeft: 3, display: "inline" }} />
      </a>
    );

    if (token.type === "boldLink") {
      return (
        <strong key={key} className={styles.botBold}>
          {linkElement}
        </strong>
      );
    }

    return <React.Fragment key={key}>{linkElement}</React.Fragment>;
  });
}

type MarkdownBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: number; text: string }
  | { type: "divider" }
  | { type: "list"; items: string[] };

function parseBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let currentList: { type: "list"; items: string[] } | null = null;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      continue;
    }

    if (/^(\-{3,}|\*{3,})$/.test(trimmed)) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({ type: "divider" });
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      if (currentList) {
        blocks.push(currentList);
        currentList = null;
      }
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      continue;
    }

    const listMatch = trimmed.match(/^(\*|-|\d+\.)\s+(.+)$/);
    if (listMatch) {
      if (!currentList) {
        currentList = { type: "list", items: [] };
      }
      currentList.items.push(listMatch[2]);
      continue;
    }

    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }
    blocks.push({ type: "paragraph", text: trimmed });
  }

  if (currentList) {
    blocks.push(currentList);
  }

  return blocks;
}

function MarkdownRenderer({ text }: { text: string }) {
  const blocks = parseBlocks(text);

  return (
    <>
      {blocks.map((block, idx) => {
        if (block.type === "divider") {
          return <hr key={`div-${idx}`} className={styles.bubbleDivider} />;
        }
        if (block.type === "heading") {
          return (
            <h4 key={`h-${idx}`} className={styles.bubbleHeading}>
              {renderInline(block.text, `h-${idx}`)}
            </h4>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={`ul-${idx}`} className={styles.bubbleList}>
              {block.items.map((item, itemIdx) => (
                <li key={`li-${idx}-${itemIdx}`} className={styles.bubbleListItem}>
                  {renderInline(item, `li-${idx}-${itemIdx}`)}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={`p-${idx}`} className={styles.bubbleParagraph}>
            {renderInline(block.text, `p-${idx}`)}
          </p>
        );
      })}
    </>
  );
}

function formatTime(date: Date = new Date()): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastUserPrompt, setLastUserPrompt] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Lock body scroll on mobile sheet open
  useEffect(() => {
    if (isOpen && window.innerWidth <= 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, scrollToBottom]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const copyToClipboard = (id: string, text: string) => {
    // Strip markdown formatting for clean clipboard copy
    const plainText = text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*/g, "")
      .replace(/###\s+/g, "");

    navigator.clipboard.writeText(plainText).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const sendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    setErrorMessage(null);
    setLastUserPrompt(trimmed);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      time: formatTime(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const botMessageId = `bot-${Date.now()}`;
    const botMsg: ChatMessage = {
      id: botMessageId,
      role: "assistant",
      content: "",
      time: formatTime(),
    };

    setMessages((prev) => [...prev, botMsg]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Request failed with status ${response.status}`
        );
      }

      if (!response.body) {
        throw new Error("No response body received from server.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, content: accumulated } : msg
          )
        );
      }
    } catch (err: unknown) {
      const errorStr =
        err instanceof Error
          ? err.message
          : "An unexpected network error occurred.";

      setErrorMessage(errorStr);

      setMessages((prev) =>
        prev.filter((msg) => !(msg.id === botMessageId && !msg.content))
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleRetry = () => {
    if (lastUserPrompt) {
      sendMessage(lastUserPrompt);
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    setErrorMessage(null);
    setLastUserPrompt(null);
  };

  return (
    <>
      {/* Floating Bottom-Right Launcher */}
      <div className={styles.floatingTrigger}>
        {!isOpen && (
          <button
            type="button"
            className={styles.triggerPill}
            onClick={() => setIsOpen(true)}
            aria-label="Open PolyTreat AI Assistant"
          >
            <Sparkles size={15} color="#0284c7" />
            <span>Ask PolyTreat AI</span>
          </button>
        )}

        <button
          type="button"
          className={styles.triggerBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
          aria-expanded={isOpen}
        >
          <div className={styles.pulseRing} />
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
          {!isOpen && <span className={styles.unreadDot} />}
        </button>
      </div>

      {/* Mobile Background Backdrop Overlay */}
      {isOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <aside
          className={`${styles.chatWindow} ${
            isExpanded ? styles.chatWindowExpanded : ""
          }`}
          role="dialog"
          aria-label="PolyTreat AI Technical Assistant"
        >
          {/* Mobile Sheet Drag Handle */}
          <div className={styles.sheetDragBar}>
            <div className={styles.dragHandlePill} />
          </div>

          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerIdentity}>
              <div className={styles.avatarBadge}>
                <Bot size={21} />
              </div>
              <div>
                <h2 className={styles.headerTitle}>
                  <span>PolyTreat Assistant</span>
                  <span className={styles.verifiedBadge}>AI</span>
                </h2>
                <div className={styles.headerStatus}>
                  <span className={styles.statusDot} />
                  <span>Chemical Technical Advisor</span>
                </div>
              </div>
            </div>

            <div className={styles.headerActions}>
              {messages.length > 0 && (
                <button
                  type="button"
                  className={styles.headerIconBtn}
                  onClick={handleResetChat}
                  title="Clear conversation"
                  aria-label="Clear conversation"
                >
                  <RotateCcw size={16} />
                </button>
              )}
              {/* Expand/Contract Toggle (Hidden on small mobile) */}
              <button
                type="button"
                className={styles.headerIconBtn}
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? "Standard view" : "Expand view"}
                aria-label={isExpanded ? "Standard view" : "Expand view"}
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                type="button"
                className={styles.headerIconBtn}
                onClick={() => setIsOpen(false)}
                title="Minimize chat"
                aria-label="Minimize chat"
              >
                <ChevronDown size={20} />
              </button>
              <button
                type="button"
                className={styles.headerIconBtn}
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className={styles.messagesArea}>
            {messages.length === 0 ? (
              /* Categorized Welcome Discovery Screen */
              <div className={styles.welcomeCard}>
                <span className={styles.welcomeBadge}>
                  <Sparkles size={12} />
                  <span>PolyTreat Chemical Intelligence</span>
                </span>
                <h3 className={styles.welcomeTitle}>
                  Hello! How can we assist your plant or project?
                </h3>
                <p className={styles.welcomeDesc}>
                  Select a topic below or type any question regarding water
                  treatment, specialty formulations, or facility hygiene.
                </p>

                <div className={styles.categoriesGroup}>
                  {CATEGORIZED_PROMPTS.map((cat, catIdx) => {
                    const CatIcon = cat.icon;
                    return (
                      <div key={catIdx} className={styles.categorySection}>
                        <div className={styles.categoryLabel}>
                          <CatIcon size={12} color={cat.color} />
                          <span>{cat.category}</span>
                        </div>
                        <div className={styles.chipsContainer}>
                          {cat.items.map((item, itemIdx) => (
                            <button
                              key={itemIdx}
                              type="button"
                              className={styles.suggestionChip}
                              onClick={() => sendMessage(item)}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Conversation Messages */
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${
                    msg.role === "user"
                      ? styles.messageRowUser
                      : styles.messageRowBot
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className={styles.botAvatarMini}>
                      <Bot size={15} />
                    </div>
                  )}

                  <div className={styles.messageContentWrap}>
                    <div
                      className={`${styles.bubble} ${
                        msg.role === "user"
                          ? styles.bubbleUser
                          : styles.bubbleBot
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        msg.content ? (
                          <>
                            <MarkdownRenderer text={msg.content} />

                            {/* Contextual Follow-Up Action Chips */}
                            {!isLoading && (
                              <div className={styles.followUpContainer}>
                                <Link
                                  href="/contact"
                                  className={styles.followUpChip}
                                >
                                  <FileText size={11} />
                                  <span>Request TDS / Quote</span>
                                </Link>
                                <Link
                                  href="/solutions/industrial-water"
                                  className={styles.followUpChip}
                                >
                                  <Droplets size={11} />
                                  <span>View Water Range</span>
                                </Link>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={styles.typingIndicator}>
                            <span className={styles.typingDot} />
                            <span className={styles.typingDot} />
                            <span className={styles.typingDot} />
                          </div>
                        )
                      ) : (
                        msg.content
                      )}
                    </div>

                    {/* Metadata: Timestamp & Copy Response Button */}
                    <div className={styles.messageMeta}>
                      <span className={styles.messageTime}>{msg.time}</span>
                      {msg.role === "assistant" && msg.content && (
                        <button
                          type="button"
                          className={`${styles.copyBtn} ${
                            copiedId === msg.id ? styles.copyBtnCopied : ""
                          }`}
                          onClick={() => copyToClipboard(msg.id, msg.content)}
                          title="Copy response to clipboard"
                        >
                          {copiedId === msg.id ? (
                            <>
                              <Check size={12} />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Error Notification with Retry */}
            {errorMessage && (
              <div className={styles.errorBanner} role="alert">
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
                <button
                  type="button"
                  className={styles.retryBtn}
                  onClick={handleRetry}
                >
                  <RotateCcw size={13} /> Retry
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form className={styles.chatInputForm} onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about chemicals, dosage, specs..."
                className={styles.chatInput}
                disabled={isLoading}
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
            <p className={styles.inputDisclaimer}>
              AI advice is grounded in PolyTreat literature. Always verify with official TDS.
            </p>
          </form>
        </aside>
      )}
    </>
  );
}
