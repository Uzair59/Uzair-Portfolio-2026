"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { StaggerText } from "@/components/motion/StaggerText";
import { useApp } from "@/components/providers/AppProviders";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "@/components/icons";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  const { ping } = useApp();
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [14, -14]);

  return (
    <section ref={ref} className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:pb-16 md:pt-20">
        <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white/45 p-6 shadow-[0_30px_120px_rgba(0,0,0,.25)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-10">
          <div className="grain absolute inset-0 rounded-[28px]" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(1200px 500px at 20% 20%, rgba(124,58,237,.35), transparent 60%), radial-gradient(900px 500px at 80% 40%, rgba(34,211,238,.25), transparent 60%), radial-gradient(900px 500px at 40% 90%, rgba(244,114,182,.18), transparent 55%)",
            }}
          />

          <div aria-hidden className="absolute inset-0 opacity-[0.16]">
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-foreground"
                style={{
                  left: `${(i * 19) % 100}%`,
                  top: `${(i * 31) % 100}%`,
                  willChange: "transform, opacity",
                }}
                animate={
                  reduce
                    ? undefined
                    : { opacity: [0.12, 0.5, 0.12], y: [0, -4, 0] }
                }
                transition={{
                  duration: 6 + (i % 6),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.09,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-muted dark:border-white/10 dark:bg-black/20">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                Available for opportunities
              </div>

              <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                <span className="block bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Hi, I&apos;m Raja Uzair Tariq
                </span>
                <div className="mt-3 text-xl md:text-2xl font-semibold bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer",
                      1500,
                      "UI/UX Enthusiast",
                      1500,
                      "React Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted md:text-base">
                {site.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="#projects"
                  onClick={() => ping()}
                  className={cn(
                    "group inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium",
                    "bg-foreground text-background",
                    "transition hover:translate-y-[-1px] hover:opacity-90 active:translate-y-0",
                  )}
                >
                  View Projects
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#contact"
                  onClick={() => ping()}
                  className={cn(
                    "glass grain inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium text-soft",
                    "transition hover:translate-y-[-1px] hover:bg-black/5 active:translate-y-0 dark:hover:bg-white/5",
                  )}
                >
                  Contact Me
                </Link>

                <div className="ml-0 flex items-center gap-2 md:ml-2">
                  <IconLink href={site.socials.github} label="GitHub">
                    <GitHubIcon className="h-4 w-4" />
                  </IconLink>
                  <IconLink href={site.socials.linkedin} label="LinkedIn">
                    <LinkedInIcon className="h-4 w-4" />
                  </IconLink>
                  <IconLink href={`mailto:${site.socials.email}`} label="Email">
                    <MailIcon className="h-4 w-4" />
                  </IconLink>
                </div>
              </div>
            </motion.div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-90">
                {/* Static Blur separated from the parallax node below */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-7 rounded-full bg-linear-to-br from-sky-500/40 via-cyan-400/25 to-blue-500/30 blur-3xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                />
                
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={reduce ? undefined : { y: parallaxY }}
                >
                <div className="relative mx-auto aspect-square w-[86%] overflow-hidden rounded-full ring-2 ring-white/20 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
                  <Image
                    src="/uzair-cartoonish.png"
                    alt="Uzair profile"
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-cover  object-top saturate-[1.06] contrast-[1.05] brightness-[1.04]"
                    priority
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(circle_at_52%_22%,rgba(255,255,255,.2),transparent_36%),linear-gradient(to_top,rgba(0,0,0,.18),transparent_35%)]"
                  />
                </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className={cn(
        "glass grain inline-flex h-10 w-10 items-center justify-center rounded-2xl text-soft",
        "transition hover:translate-y-[-1px] hover:bg-black/5 active:translate-y-0 dark:hover:bg-white/5",
      )}
    >
      {children}
    </a>
  );
}
