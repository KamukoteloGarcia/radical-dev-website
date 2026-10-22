"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { markPageReady } from "@/lib/page-ready";
import { SplashMark } from "./SplashMark";

// Always shown for at least 5 seconds, even when the page loads instantly
// (keep in sync with the .splash-bar duration and the fail-safe delay in globals.css).
const minVisibleMs = 5000;
const leaveMs = 900;

type Phase = "showing" | "leaving" | "gone";

type SplashProps = {
  labels: { status: string; tagline: string; message: string };
};

function waitForLoad() {
  return new Promise<void>((resolve) => {
    if (document.readyState === "complete") resolve();
    else addEventListener("load", () => resolve(), { once: true });
  });
}

// Full-screen intro on every page load: the "R" draws itself, "Radical dev" appears letter by letter
// and a red bar fills. It is server-rendered, so it covers the page from the very first paint; when
// everything has loaded it opens like a curtain. A CSS fail-safe hides it even if JavaScript never runs.
// Client-side navigation keeps the layout mounted, so it only shows on real page loads.
export function Splash({ labels }: SplashProps) {
  const [phase, setPhase] = useState<Phase>("showing");

  useEffect(() => {
    let cancelled = false;
    // Count from the moment the splash was first painted (server-rendered), not from the click,
    // so it stays on screen for the full 5 seconds even after a slow server response.
    const firstPaint = performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? performance.now();
    const visibleFor = performance.now() - firstPaint;
    const minimum = new Promise((resolve) => setTimeout(resolve, Math.max(0, minVisibleMs - visibleFor)));

    Promise.all([waitForLoad(), minimum]).then(() => {
      if (cancelled) return;
      markPageReady();
      setPhase("leaving");
      setTimeout(() => !cancelled && setPhase("gone"), leaveMs);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // No scrolling while the splash covers the page.
  useEffect(() => {
    if (phase !== "showing") return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = "";
    };
  }, [phase]);

  if (phase === "gone") return null;

  const words = [
    { text: "Radical", className: "text-fg" },
    { text: "dev", className: "text-red" },
  ];
  let letterIndex = 0;

  return (
    <div
      role="status"
      aria-label={labels.status}
      className={cn("splash fixed inset-0 z-[100] grid place-items-center overflow-hidden", phase === "leaving" && "splash-leave pointer-events-none")}
    >
      {/* Two curtain halves that slide apart when leaving */}
      <div aria-hidden="true" className="splash-curtain absolute inset-y-0 left-0 w-1/2 bg-bg" />
      <div aria-hidden="true" className="splash-curtain splash-curtain-right absolute inset-y-0 right-0 w-1/2 bg-bg" />
      <div aria-hidden="true" className="splash-content absolute inset-0 bg-[radial-gradient(40%_45%_at_50%_45%,var(--glow),transparent_70%)]" />

      <div className="splash-content relative flex flex-col items-center px-6 text-center">
        <div className="relative">
          <span aria-hidden="true" className="splash-glow absolute inset-[-45%] rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)]" />
          <SplashMark />
        </div>

        <p aria-hidden="true" className="mt-8 flex gap-3 font-display text-[34px] font-semibold leading-none tracking-[-0.01em] sm:text-[44px]">
          {words.map((word) => (
            <span key={word.text} className={word.className}>
              {Array.from(word.text).map((letter) => {
                const i = letterIndex++;
                return (
                  <span key={i} className="splash-letter inline-block" style={{ animationDelay: `${1300 + i * 55}ms` }}>
                    {letter}
                  </span>
                );
              })}
            </span>
          ))}
        </p>
        <p aria-hidden="true" className="splash-fade mt-3 text-[11px] font-semibold uppercase tracking-[0.5em] text-subtle" style={{ animationDelay: "2000ms" }}>
          {labels.tagline}
        </p>

        <div aria-hidden="true" className="mt-10 h-[3px] w-56 overflow-hidden rounded-full bg-fg/10">
          <span className="splash-bar block h-full origin-left rounded-full bg-[linear-gradient(90deg,var(--red-deep),var(--red),var(--red-bright))]" />
        </div>
        <p className="splash-fade mt-4 text-[14px] text-muted" style={{ animationDelay: "1500ms" }}>
          {labels.message}
        </p>
      </div>
    </div>
  );
}
