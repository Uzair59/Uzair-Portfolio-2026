"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function AnimatedBackground({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 grid-fade opacity-60" />

      {/* Gradient blobs */}
      <motion.div
        className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(37,99,235,.55), transparent 55%), radial-gradient(circle at 70% 60%, rgba(34,211,238,.50), transparent 55%), radial-gradient(circle at 30% 70%, rgba(76,29,149,.32), transparent 58%)",
          willChange: "transform",
        }}
        animate={
          reduce
            ? undefined
            : {
                y: [0, 18, -12, 0],
                rotate: [0, 6, -4, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 14, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <motion.div
        className="absolute bottom-[-160px] right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl opacity-80"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(34,211,238,.40), transparent 58%), radial-gradient(circle at 70% 55%, rgba(37,99,235,.40), transparent 60%)",
          willChange: "transform",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, -18, 10, 0],
                y: [0, -14, 18, 0],
              }
        }
        transition={
          reduce
            ? undefined
            : { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Top vignette */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent dark:from-black/50" />
    </div>
  );
}

