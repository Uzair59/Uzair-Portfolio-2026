"use client";

import * as React from "react";
import { Navbar } from "@/components/site/navbar/Navbar";
import { useApp } from "@/components/providers/AppProviders";
import { EasterEggBurst } from "@/components/effects/EasterEggBurst";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { easterEggBurstKey } = useApp();

  return (
    <>
      <Navbar />
      <main className="relative z-10">{children}</main>
      <EasterEggBurst burstKey={easterEggBurstKey} />
    </>
  );
}

