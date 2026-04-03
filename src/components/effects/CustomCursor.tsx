"use client";

import * as React from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = React.useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, { stiffness: 650, damping: 42, mass: 0.2 });
  const smoothY = useSpring(mouseY, { stiffness: 650, damping: 42, mass: 0.2 });

  const blobX = useSpring(mouseX, { stiffness: 140, damping: 26, mass: 0.8 });
  const blobY = useSpring(mouseY, { stiffness: 140, damping: 26, mass: 0.8 });

  React.useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce, mouseX, mouseY]);

  if (reduce) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[50] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(124,58,237,.28), transparent 55%), radial-gradient(circle at 70% 60%, rgba(34,211,238,.22), transparent 55%), radial-gradient(circle at 30% 70%, rgba(244,114,182,.18), transparent 60%)",
          x: blobX,
          y: blobY,
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}

