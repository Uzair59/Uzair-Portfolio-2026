"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function StaggerText({
  text,
  className,
  letterClassName,
  delay = 0,
}: {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
}) {
  const letters = React.useMemo(() => Array.from(text), [text]);

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay,
          },
        },
      }}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className={cn("inline-block will-change-transform", letterClassName)}
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          aria-hidden={ch === " " ? true : undefined}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}

