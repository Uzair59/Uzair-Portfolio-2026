"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function EasterEggBurst({ burstKey }: { burstKey: number }) {
  const [seed, setSeed] = React.useState(0);

  React.useEffect(() => {
    if (!burstKey) return;
    setSeed((s) => s + 1);
  }, [burstKey]);

  const pieces = React.useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => ({
        id: `${seed}-${i}`,
        x: rand(-180, 180),
        y: rand(-220, -80),
        r: rand(-40, 40),
        d: rand(0.7, 1.2),
        s: rand(10, 18),
        c: i % 3 === 0 ? "rgba(34,211,238,.85)" : i % 3 === 1 ? "rgba(124,58,237,.85)" : "rgba(244,114,182,.85)",
      })),
    [seed],
  );

  return (
    <AnimatePresence>
      {burstKey ? (
        <motion.div
          key={burstKey}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="absolute left-1/2 top-20 -translate-x-1/2">
            {pieces.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full blur-[0.5px]"
                style={{
                  width: p.s,
                  height: p.s,
                  background: p.c,
                  boxShadow: `0 0 24px ${p.c}`,
                }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0.6, rotate: 0 }}
                animate={{
                  x: p.x,
                  y: p.y,
                  opacity: [0, 1, 1, 0],
                  scale: [0.6, 1, 1, 0.8],
                  rotate: p.r,
                }}
                transition={{ duration: 0.95 * p.d, ease: "easeOut" }}
              />
            ))}
            <motion.div
              className="absolute -inset-10 rounded-full"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 1, 0], scale: [0.7, 1.08, 1.25] }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,.22), transparent 60%)",
              }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

