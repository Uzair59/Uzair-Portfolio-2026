"use client";

import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Who I Am"
      title="Building interfaces that feel intentional."
      subtitle="A quick snapshot of how I work and what I prioritize."
    >
      <Reveal className="grid gap-6 md:grid-cols-2">
        <div className="glass grain rounded-[26px] p-6">
          <h3 className="text-sm font-semibold text-soft">Background</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {site.bio}
          </p>
        </div>
        <div className="glass grain rounded-[26px] p-6">
          <h3 className="text-sm font-semibold text-soft">Working Principles</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted md:text-base">
            <li>• Motion with intent (micro-interactions that guide, not distract)</li>
            <li>• Performance as a feature (fast by default, measurable always)</li>
            <li>• Accessible UX (keyboard-first, reduced-motion friendly)</li>
            <li>• Clean systems (reusable components, consistent tokens)</li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

