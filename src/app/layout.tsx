import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { AnimatedBackground } from "@/components/effects/AnimatedBackground";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SiteShell } from "@/components/site/SiteShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzair | Frontend Developer",
  description:
    "Uzair's portfolio - frontend engineering, performance-minded UI, and polished product experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppProviders>
          <div className="relative min-h-screen">
            <AnimatedBackground />
            <CustomCursor />
            <SiteShell>{children}</SiteShell>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
