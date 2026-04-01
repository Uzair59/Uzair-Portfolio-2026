"use client";

import * as React from "react";
import { ThemeProvider } from "./ThemeProvider";

type AppContextValue = {
  ping: () => void;
  registerLogoClick: () => void;
  easterEggBurstKey: number;
};

const AppContext = React.createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProviders");
  return ctx;
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [easterEggBurstKey, setEasterEggBurstKey] = React.useState(0);
  const clickWindowMs = 1200;
  const requiredClicks = 7;
  const clicksRef = React.useRef<number[]>([]);
  const ping = React.useCallback(() => {
    // intentionally silent
  }, []);

  const registerLogoClick = React.useCallback(() => {
    const now = Date.now();
    clicksRef.current = [...clicksRef.current, now].filter(
      (t) => now - t <= clickWindowMs,
    );
    if (clicksRef.current.length >= requiredClicks) {
      clicksRef.current = [];
      setEasterEggBurstKey((k) => k + 1);
      ping();
    } else {
      ping();
    }
  }, [ping]);

  const value = React.useMemo<AppContextValue>(
    () => ({
      ping,
      registerLogoClick,
      easterEggBurstKey,
    }),
    [ping, registerLogoClick, easterEggBurstKey],
  );

  return (
    <ThemeProvider>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </ThemeProvider>
  );
}

