"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./Section";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { SendIcon } from "@/components/icons";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const starters = [
  "Which project best highlights your frontend skills?",
  "What is your current tech stack?",
  "How do you approach performance optimization?",
];

function mockReply(questionRaw: string) {
  const q = questionRaw.toLowerCase();
  if (q.includes("project")) {
    return "Glass Dashboard is the best representation of my frontend skillset. It combines reusable architecture, interaction quality, and performance-focused rendering decisions.";
  }
  if (q.includes("stack") || q.includes("tech")) {
    return "My core stack is Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. I focus on scalable UI architecture and production-level DX.";
  }
  if (q.includes("performance")) {
    return "I optimize by reducing re-renders, using smart component boundaries, lazy-loading where useful, and shipping motion that stays smooth even on low-end devices.";
  }
  if (q.includes("contact") || q.includes("hire")) {
    return `You can reach me directly at ${site.socials.email}.`;
  }
  return "Great question. I focus on frontend engineering that balances visual quality, maintainability, and speed. Ask me about projects, stack, or performance for specifics.";
}

// Helper function to generate unique IDs
function generateId(): string {
  // Try to use crypto.randomUUID first
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  
  // Fallback to timestamp + random string
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
}

export function AMA() {
  const [messages, setMessages] = React.useState<Msg[]>([
    {
      id: "welcome",
      role: "assistant",
      content: `Hi, I'm Uzair's portfolio assistant. Ask me anything about projects, skills, or frontend engineering approach.`,
    },
  ]);
  const [value, setValue] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const listRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = React.useCallback(async (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userMsg: Msg = { id: generateId(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setValue("");
    setTyping(true);

    await new Promise((r) => setTimeout(r, 380));
    const assistantMsg: Msg = {
      id: generateId(),
      role: "assistant",
      content: mockReply(text),
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setTyping(false);
  }, [typing]);

  return (
    <Section
      id="ama"
      eyebrow="Ask Me Anything"
      title="A lightweight portfolio assistant."
      subtitle="Mock AI chat with predefined intelligent responses about my work."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
        <div className="glass grain overflow-hidden rounded-[28px]">
          <div className="flex items-center justify-between border-b border-black/10 bg-black/5 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-medium text-soft">Portfolio Assistant</div>
            <div className="text-xs text-muted">Mock AI</div>
          </div>

          <div ref={listRef} className="max-h-[420px] space-y-3 overflow-y-auto px-5 py-4">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "max-w-[92%] rounded-2xl border px-4 py-3 text-sm leading-relaxed",
                    m.role === "user"
                      ? "ml-auto border-cyan-400/30 bg-cyan-400/10 text-soft"
                      : "border-black/10 bg-black/5 text-muted dark:border-white/10 dark:bg-white/5",
                  )}
                >
                  {m.content}
                </motion.div>
              ))}
            </AnimatePresence>
            {typing ? (
              <div className="max-w-[70%] rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-muted dark:border-white/10 dark:bg-white/5">
                Thinking<span className="blink">…</span>
              </div>
            ) : null}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              void send(value);
            }}
            className="border-t border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-2">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Ask about projects, stack, or performance..."
                className="h-11 w-full rounded-2xl border border-black/10 bg-background px-4 text-sm text-soft outline-none placeholder:text-muted focus:border-cyan-400/50 dark:border-white/10"
              />
              <button
                type="submit"
                disabled={typing}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-foreground text-background transition hover:opacity-90 disabled:opacity-60 dark:border-white/10"
                aria-label="Send"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <div className="glass grain rounded-[28px] p-6">
          <div className="text-sm font-semibold text-soft">Try these prompts</div>
          <div className="mt-4 grid gap-2">
            {starters.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => void send(s)}
                className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-left text-sm text-muted transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}