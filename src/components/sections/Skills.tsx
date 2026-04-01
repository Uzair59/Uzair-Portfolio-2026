"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Section } from "./Section";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Expertise"
      title="A frontend toolkit shaped by production work."
      subtitle="Focused on architecture, UX quality, and shipping velocity."
    >
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className={cn(
                "group glass grain relative overflow-hidden rounded-[26px] p-6",
                "transition will-change-transform",
              )}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.99 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold text-soft">
                    {s.name}
                  </h3>
                  <span className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-muted dark:border-white/10 dark:bg-white/5">
                    {s.level}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.summary}
                </p>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(34,211,238,.18), transparent 55%), radial-gradient(circle at 70% 60%, rgba(124,58,237,.18), transparent 60%), radial-gradient(circle at 40% 80%, rgba(244,114,182,.12), transparent 55%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

