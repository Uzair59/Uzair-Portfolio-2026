import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/lib/site";

const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton /> },
);
const Experience = dynamic(
  () => import("@/components/sections/Experience").then((m) => m.Experience),
  { loading: () => <SectionSkeleton /> },
);
const AMA = dynamic(
  () => import("@/components/sections/AMA").then((m) => m.AMA),
  {
    loading: () => <SectionSkeleton />,
  },
);

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AMA />
      <Contact />

      <footer className="border-t border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. Built with Next.js +
            Framer Motion.
          </div>
          <div className="flex gap-4">
            <a
              className="text-muted hover:text-foreground"
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-muted hover:text-foreground"
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-muted hover:text-foreground"
              href={`mailto:${site.socials.email}`}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="glass grain h-[360px] rounded-[28px]" />
    </div>
  );
}
