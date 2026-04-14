"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Section } from "./Section";
import { cn } from "@/lib/cn";
import { MailIcon } from "@/components/icons";

export function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function submit() {
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: name,
          email: email,
          message: message,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("bad");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's talk about your next frontend build."
      subtitle="Open to product-focused frontend roles and freelance work."
    >
      <div className="grid gap-4 lg:grid-cols-[.95fr_1.05fr]">
        <div className="glass grain rounded-[28px] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <MailIcon className="h-5 w-5 text-soft" />
            </div>
            <div>
              <div className="text-sm font-semibold text-soft">
                Quick contact
              </div>
              <div className="text-sm text-muted">{site.socials.email}</div>
            </div>
          </div>

          <div className="mt-5 rounded-[22px] border border-black/10 bg-black/5 p-4 text-sm text-muted dark:border-white/10 dark:bg-black/20">
            Prefer email?{" "}
            <a
              className="text-soft underline decoration-black/20 underline-offset-4 hover:decoration-black/40 dark:decoration-white/20 dark:hover:decoration-white/40"
              href={`mailto:${site.socials.email}`}
            >
              Click here
            </a>{" "}
            and I’ll respond quickly.
          </div>
        </div>

        <motion.form
          className="glass grain rounded-[28px] p-6"
          onSubmit={(e) => {
            e.preventDefault();
            void submit();
          }}
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Name">
              <Input
                value={name}
                onChange={setName}
                placeholder="Your name"
                autoComplete="name"
              />
            </Field>
            <Field label="Email">
              <Input
                value={email}
                onChange={setEmail}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </Field>
          </div>

          <div className="mt-3">
            <Field label="Message">
              <Textarea
                value={message}
                onChange={setMessage}
                placeholder="What are you building?"
              />
            </Field>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-muted">
              {status === "sent"
                ? "Message sent successfully! I'll get back to you soon."
                : status === "error"
                  ? "Couldn’t send. Please check your config or try again later."
                  : "No spam. No fuss."}
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "rounded-2xl px-4 py-2 text-sm font-medium",
                "bg-foreground text-background",
                "transition hover:translate-y-[-1px] hover:opacity-90 active:translate-y-0",
                "disabled:opacity-60 disabled:hover:translate-y-0",
              )}
            >
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-medium text-muted">{label}</div>
      {children}
    </label>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <motion.input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className="h-11 w-full rounded-2xl border border-black/10 bg-background px-4 text-sm text-soft outline-none placeholder:text-muted focus:border-cyan-400/50 dark:border-white/10 dark:bg-black/20"
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <motion.textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className="w-full resize-none rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm text-soft outline-none placeholder:text-muted focus:border-cyan-400/50 dark:border-white/10 dark:bg-black/20"
      whileFocus={{ scale: 1.01 }}
      transition={{ duration: 0.15 }}
    />
  );
}

