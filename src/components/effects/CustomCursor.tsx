"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = React.useState(false);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 rounded-full bg-white/80 mix-blend-difference"
        animate={{
          opacity: visible ? 1 : 0,
          x: pos.x - 6,
          y: pos.y - 6,
        }}
        transition={{ type: "spring", stiffness: 650, damping: 42, mass: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[50] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(124,58,237,.28), transparent 55%), radial-gradient(circle at 70% 60%, rgba(34,211,238,.22), transparent 55%), radial-gradient(circle at 30% 70%, rgba(244,114,182,.18), transparent 60%)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          x: pos.x,
          y: pos.y,
        }}
        transition={{ type: "spring", stiffness: 140, damping: 26, mass: 0.8 }}
      />
    </>
  );
}

