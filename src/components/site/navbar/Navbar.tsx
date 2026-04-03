"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";
import { useApp } from "@/components/providers/AppProviders";
import { MoonIcon, SunIcon, XIcon } from "@/components/icons";

const links = [
  { href: "#about", label: "Who I Am" },
  { href: "#skills", label: "Expertise" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#ama", label: "Ask AI" },
  { href: "#contact", label: "Get In Touch" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { registerLogoClick } = useApp();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const scrollYRef = React.useRef(0);

  React.useEffect(() => setMounted(true), []);
  // React.useEffect(() => {
  //   if (open) {
  //     scrollYRef.current = window.scrollY;
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollYRef.current}px`;
  //     document.body.style.left = "0";
  //     document.body.style.right = "0";
  //     document.body.style.width = "100%";
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     const y = scrollYRef.current;
  //     document.body.style.position = "";
  //     document.body.style.top = "";
  //     document.body.style.left = "";
  //     document.body.style.right = "";
  //     document.body.style.width = "";
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //     if (y) window.scrollTo(0, y);
  //   }
  //   return () => {
  //     const y = scrollYRef.current;
  //     document.body.style.position = "";
  //     document.body.style.top = "";
  //     document.body.style.left = "";
  //     document.body.style.right = "";
  //     document.body.style.width = "";
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //     if (y) window.scrollTo(0, y);
  //   };
  // }, [open]);
  // React.useEffect(() => {
  //   const onKey = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") setOpen(false);
  //   };
  //   window.addEventListener("keydown", onKey);
  //   return () => window.removeEventListener("keydown", onKey);
  // }, []);

  const isLight = mounted && theme === "light";
  const toggleTheme = React.useCallback(
    () => setTheme(isLight ? "dark" : "light"),
    [isLight, setTheme],
  );

  return (
    <header suppressHydrationWarning className="sticky top-0 z-50 border-b border-black/10 bg-background/70 backdrop-blur-xl dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={registerLogoClick}
            className={cn(
              "group flex items-center gap-2.5 relative rounded-2xl px-2 py-1",
              "transition-all active:scale-[0.95]",
            )}
            aria-label="Home"
          >
            {/* RU Aesthetic Italic Logo */}
            <div className="relative flex h-10 items-center justify-center overflow-hidden">
              <svg
                viewBox="0 0 100 40"
                className="h-8 w-auto fill-none stroke-current transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
              >
                {/* R Character - Italic & Sharp */}
                <motion.path
                  d="M20 35L35 5H55C65 5 70 12 65 20C60 28 50 28 45 28L40 28M42 28L55 35"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-600 dark:text-violet-400"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5 }}
                />
                {/* U Character - Nested/Connected style */}
                <motion.path
                  d="M65 15L60 28C58 35 68 38 75 35L85 10"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-cyan-500 dark:text-cyan-300"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Optional: Simple Divider and Text */}
            <div className="flex flex-col items-start">
              <span className="text-[15px] font-bold tracking-tight italic bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-violet-600 transition-all duration-500">
                {"Uzair"}
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-muted-foreground/50 leading-none">
                {"Developer"}
              </span>
            </div>

            {/* Background Glow on Hover */}
            <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl px-3 py-2 text-sm text-muted transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={cn(
              "glass grain rounded-xl p-2 text-soft",
              "transition hover:bg-black/5 active:scale-[0.98] dark:hover:bg-white/5",
            )}
            aria-label={
              isLight ? "Switch to dark theme" : "Switch to light theme"
            }
          >
            {isLight ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            className="glass grain rounded-xl p-2 text-soft transition hover:bg-black/5 active:scale-[0.98] dark:hover:bg-white/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="relative block h-4 w-5"
              initial={false}
              animate={open ? "open" : "closed"}
            >
              <motion.span
                className="absolute left-0 top-0.5 h-[2px] w-5 rounded bg-current"
                variants={{
                  open: { rotate: 45, y: 6 },
                  closed: { rotate: 0, y: 0 },
                }}
              />
              <motion.span
                className="absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current"
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
              />
              <motion.span
                className="absolute left-0 top-[13px] h-[2px] w-5 rounded bg-current"
                variants={{
                  open: { rotate: -45, y: -6 },
                  closed: { rotate: 0, y: 0 },
                }}
              />
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed inset-x-3 top-16 z-50 overflow-hidden rounded-2xl border border-white/20 bg-[#07090f]/92 p-4 shadow-[0_28px_70px_rgba(0,0,0,.55)] backdrop-blur-2xl md:hidden"
              initial={{ y: -22, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -22, opacity: 0, filter: "blur(6px)" }}
              transition={{ duration: 0.42, ease: [0.42, 0, 0.2, 1] }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="text-sm font-semibold text-white">
                  Navigation
                </div>
                <button
                  type="button"
                  className="rounded-lg p-2 text-white/80 transition hover:bg-white/10"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-3">
                {links.map((l) => (
                  <motion.div key={l.href} whileTap={{ scale: 0.985 }}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white/90 transition hover:-translate-y-0.5 hover:bg-white/15"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
