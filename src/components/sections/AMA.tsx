"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./Section";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { SendIcon } from "@/components/icons";

type Msg = { id: string; role: "user" | "assistant"; content: string };

const starters = [
  "Why should we hire you as a Frontend Developer?",
  "What are your core technical strengths?",
  "Can you explain your role at Sigma Digital Solutions?",
  "How do you handle API integration and State Management?",
  "Do you have experience with Mobile Development?",
  "What projects have you worked on recently?",
];

function mockReply(questionRaw: string) {
  const q = questionRaw.toLowerCase();
  
  if (q.includes("hire") || q.includes("why")) {
    return "With 2.5+ years of intensive experience in React.js and Next.js, and a keen eye for cutting-edge UI/UX design (using Tailwind & Framer Motion), I can efficiently translate complex requirements into scalable, clean, and production-ready architectures.";
  }
  if (q.includes("strength") || q.includes("tech") || q.includes("stack")) {
    return "My core strengths are React.js, Next.js, TypeScript, and Redux (specifically RTK Query). I also heavily emphasize responsive, highly interactive web applications built with Tailwind CSS.";
  }
  if (q.includes("sigma digital solutions") || q.includes("sigma")) {
    return "At Sigma Digital Solutions, I'm involved in developing high-performance frontend applications. I collaborate with cross-functional teams to deliver scalable solutions, implement modern UI/UX designs, and ensure optimal web performance.";
  }
  if (q.includes("api") || q.includes("state")) {
    return "I primarily use RTK Query for state management and API integration. It allows me to handle complex server states efficiently, ensuring smooth data handling and reducing unnecessary API calls.";
  }
  if (q.includes("mobile") || q.includes("native")) {
    return "Yes, I have 8 months of hands-on experience in React Native development. I successfully utilized Tailwind CSS for the mobile UI and Axios for seamless cross-device API integrations.";
  }
  if (q.includes("project") || q.includes("build") || q.includes("recent")) {
    return "I've recently contributed to various web platforms where I implemented fully responsive user interfaces with Next.js, ensuring seamless data flow with state management tools and creating engaging aesthetics with framer motion and Tailwind CSS.";
  }
  if (q.includes("contact") || q.includes("email")) {
    return `You can reach me directly at ${site.socials.email} or call +923100571321.`;
  }
  
  return "That's a great question! I focus on building premium web applications that prioritize visual finesse, robust data integration with RTK Query, and fast performance.";
}

// Helper function to generate unique IDs
function generateId(): string {
  // Try to use crypto.randomUUID first
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
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

  // React.useEffect(() => {
  //   listRef.current?.scrollTo({
  //     top: listRef.current.scrollHeight,
  //     // behavior: "smooth",
  //   });
  // }, [messages, typing]);

  const send = React.useCallback(
    async (raw: string) => {
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
    },
    [typing],
  );

  return (
    <Section
      id="ama"
      eyebrow="Ask Me Anything"
      title="A lightweight portfolio assistant."
      subtitle="Mock AI chat with predefined intelligent responses about my work."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_.8fr]">
        <div suppressHydrationWarning className="glass grain overflow-hidden rounded-[28px]">
          <div className="flex items-center justify-between border-b border-black/10 bg-black/5 px-5 py-4 dark:border-white/10 dark:bg-white/5">
            <div className="text-sm font-medium text-soft">
              {"Portfolio Assistant"}
            </div>
            <div className="text-xs text-muted">{"Mock AI"}</div>
          </div>

          <div
            ref={listRef}
            className="max-h-[420px] space-y-3 overflow-y-auto px-5 py-4"
          >
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
                {"Thinking"}<span className="blink">{"…"}</span>
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

        <div suppressHydrationWarning className="glass grain rounded-[28px] p-6">
          <div className="text-sm font-semibold text-soft">
            {"Try these prompts"}
          </div>
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
