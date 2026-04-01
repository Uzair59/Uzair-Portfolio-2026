export type Project = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  tags: string[];
  year: string;
  links?: { label: string; href: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "glass-dashboard",
    name: "Glass Dashboard",
    description:
      "A motion-first analytics dashboard with glassmorphism, responsive grids, and buttery interactions.",
    image: "/next.svg",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "Live", href: "https://example.com" },
      { label: "Repo", href: "https://github.com/your-handle/example" },
    ],
    highlights: [
      "Scroll-driven sections with staggered reveals",
      "Optimized charts rendering + skeleton loading",
      "Component library + design tokens",
    ],
  },
  {
    slug: "ai-search-notes",
    name: "AI Search Notes",
    description:
      "A notes app with semantic search, fast keyboard UX, and a clean futuristic UI.",
    image: "/vercel.svg",
    year: "2025",
    tags: ["React", "Search", "UX", "Performance"],
    highlights: [
      "Instant results with debounced queries",
      "Accessible command palette",
      "Offline-first caching strategy",
    ],
  },
  {
    slug: "commerce-motion",
    name: "Commerce Motion",
    description:
      "Ecommerce UI with delightful interactions, optimistic updates, and a premium product page flow.",
    image: "/next.svg",
    year: "2024",
    tags: ["Next.js", "UI", "Animations", "Edge"],
    highlights: [
      "Motion layout transitions across routes",
      "Image optimization + LCP improvements",
      "Typed API layer with validation",
    ],
  },
];

