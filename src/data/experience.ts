export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Product Studio",
    role: "Frontend Engineer",
    start: "2024",
    end: "Now",
    summary:
      "Led UI platform work across multiple products, focusing on motion, performance, and DX.",
    bullets: [
      "Built a reusable component system (tokens + primitives) used across 3 apps",
      "Improved LCP by 35–55% via image strategy + route-level optimization",
      "Introduced motion guidelines for consistent micro-interactions",
    ],
  },
  {
    company: "Startup",
    role: "UI Engineer",
    start: "2022",
    end: "2024",
    summary:
      "Owned core product surfaces, from onboarding to dashboards, and shipped weekly.",
    bullets: [
      "Implemented complex responsive layouts with accessibility-first components",
      "Added analytics instrumentation and performance budgets",
      "Partnered with design to iterate on premium visual language",
    ],
  },
];

