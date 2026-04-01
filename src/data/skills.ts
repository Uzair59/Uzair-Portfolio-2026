export type Skill = {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  summary: string;
};

export const skills: Skill[] = [
  {
    name: "Next.js (App Router)",
    level: "Expert",
    summary: "RSC patterns, routing, caching, performance, and production UI.",
  },
  {
    name: "TypeScript",
    level: "Expert",
    summary: "Typed APIs, DX-first component design, and reliable refactors.",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    summary: "Design tokens, responsive systems, and tasteful glassmorphism.",
  },
  {
    name: "Framer Motion",
    level: "Advanced",
    summary: "Stagger, scroll reveal, layout transitions, and micro-interactions.",
  },
  {
    name: "Accessibility",
    level: "Proficient",
    summary: "Keyboard UX, semantics, ARIA, and motion-reduced alternatives.",
  },
  {
    name: "Performance",
    level: "Advanced",
    summary: "Image + bundle optimization, profiling, and interaction smoothness.",
  },
];

