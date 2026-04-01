"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience Timeline"
      subtitle="Teams, products, and outcomes over the last few years."
    >
      <Reveal>
        <div className="relative grid gap-6">
          <div
            aria-hidden
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-black/20 via-black/10 to-transparent md:left-6 dark:from-white/25 dark:via-white/10"
          />

          {experience.map((e, i) => (
            <motion.div
              key={`${e.company}-${e.role}`}
              className="relative pl-12 md:pl-16"
              initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute left-[7px] top-6 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-500 shadow-[0_0_0_6px_rgba(0,0,0,.06)] md:left-[15px] dark:shadow-[0_0_0_6px_rgba(255,255,255,.06)]" />
              <div className="glass grain rounded-[26px] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <div className="text-sm font-semibold text-soft">
                      {e.role}
                    </div>
                    <div className="mt-1 text-sm text-muted">
                      {e.company}
                    </div>
                  </div>
                  <div className="text-xs text-muted">
                    {e.start} → {e.end}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {e.summary}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {e.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

