"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mb-8">
          {eyebrow ? (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted dark:border-white/10 dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-pretty text-sm text-muted md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

