"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Section } from "./Section";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { ExternalLinkIcon, XIcon } from "@/components/icons";

export function Projects() {
  const [projects, setProjects] = React.useState<Project[] | null>(null);
  const [active, setActive] = React.useState<Project | null>(null);

  React.useEffect(() => {
    let mounted = true;
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => {
        if (!mounted) return;
        setProjects(Array.isArray(d?.projects) ? d.projects : []);
      })
      .catch(() => setProjects([]));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects that reflect my frontend craft."
      subtitle="Case-study style cards with deeper context in the modal."
    >
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {(projects ?? []).length === 0 && projects !== null
            ? null
            : (projects ?? Array.from({ length: 3 }, (_, i) => i)).map((p, i) => {
            if (typeof p === "number") {
              return (
                <div
                  key={`s-${i}`}
                  className="glass grain h-[190px] animate-pulse rounded-[26px] border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5"
                />
              );
            }
            return (
              <motion.button
                key={p.slug}
                type="button"
                onClick={() => setActive(p)}
                className={cn(
                  "group glass grain relative overflow-hidden rounded-[26px] p-6 text-left",
                  "transition hover:bg-black/5 dark:hover:bg-white/5",
                )}
                initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.06 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="relative z-10">
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/20">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.name} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-contain p-6 opacity-90"
                        priority={i === 0}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-cyan-400/10 to-pink-400/10" />
                    )}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs text-muted">{p.year}</div>
                      <h3 className="mt-1 text-sm font-semibold text-soft">
                        {p.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-muted dark:border-white/10 dark:bg-white/5">
                      View
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-muted dark:border-white/10 dark:bg-black/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(124,58,237,.18), transparent 55%), radial-gradient(circle at 70% 60%, rgba(34,211,238,.16), transparent 60%), radial-gradient(circle at 40% 80%, rgba(244,114,182,.12), transparent 55%)",
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </Reveal>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close modal"
            className="absolute inset-0 bg-black/55 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="glass grain relative z-10 w-full max-w-2xl max-h-[84vh] overflow-y-auto rounded-[28px] p-6 md:p-8"
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 18, scale: 0.98, filter: "blur(10px)" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.image ? (
              <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-[22px] border border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/20">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="object-contain p-8 opacity-95"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>
            ) : null}
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-xs text-muted">{project.year}</div>
                <div className="mt-1 text-lg font-semibold text-soft">
                  {project.name}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-black/10 bg-black/5 p-2 text-soft transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                aria-label="Close"
              >
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-black/5 px-2 py-1 text-[11px] text-muted dark:border-white/10 dark:bg-black/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[22px] border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xs font-medium text-soft">
                  Highlights
                </div>
                <ul className="mt-2 space-y-2 text-sm text-muted">
                  {project.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[22px] border border-black/10 bg-black/5 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-xs font-medium text-soft">Links</div>
                <div className="mt-2 space-y-2">
                  {(project.links ?? []).length ? (
                    project.links!.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-black/10 bg-black/5 px-3 py-2 text-sm text-muted transition hover:bg-black/10 dark:border-white/10 dark:bg-black/20 dark:hover:bg-white/5"
                      >
                        <span>{l.label}</span>
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    ))
                  ) : (
                    <div className="text-sm text-muted">
                      Add links in <code className="text-soft">src/data/projects.ts</code>.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

