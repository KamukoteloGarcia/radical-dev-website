"use client";

import { Children, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { HeroControls } from "./HeroControls";

type HeroCarouselProps = {
  children: ReactNode;
  /** Per-banner palette, so the controls stay readable on light banners. */
  tones: Array<"light" | undefined>;
  intervalMs: number;
  labels: { region: string; previous: string; next: string; goTo: string };
};

const leaveMs = 900;

function prefersReducedMotion() {
  return matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Full-width hero banners that swap with a 3D turn.
// Only the visible banner (plus the one leaving) is mounted, and everything pauses off screen.
export function HeroCarousel({ children, tones, intervalMs, labels }: HeroCarouselProps) {
  const slides = Children.toArray(children);
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hasMoved, setHasMoved] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const isRunning = isVisible;

  function show(index: number, dir: 1 | -1) {
    if (index === active) return;
    setDirection(dir);
    setLeaving(prefersReducedMotion() ? null : active);
    setHasMoved(true);
    setActive(index);
  }

  // Autoplay (restarts whenever the banner changes).
  useEffect(() => {
    if (!isRunning || prefersReducedMotion()) return;
    const id = setTimeout(() => {
      setDirection(1);
      setLeaving(active);
      setHasMoved(true);
      setActive((active + 1) % total);
    }, intervalMs);
    return () => clearTimeout(id);
  }, [active, isRunning, intervalMs, total]);

  // Unmount the previous banner once its exit animation is over.
  useEffect(() => {
    if (leaving === null) return;
    const id = setTimeout(() => setLeaving(null), leaveMs);
    return () => clearTimeout(id);
  }, [leaving]);

  // Pause autoplay and all animations when the hero is off screen.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.region}
      data-paused={isVisible ? undefined : ""}
      className="relative"
    >
      <div className="grid">
        {slides.map((slide, i) => {
          if (i !== active && i !== leaving) return null;
          const isLeaving = i === leaving;
          return (
            <div
              key={i}
              inert={isLeaving}
              className={cn(
                "[grid-area:1/1]",
                isLeaving ? "pointer-events-none z-0 motion-safe:animate-hero-out" : "z-10",
                !isLeaving && hasMoved && "motion-safe:animate-hero-in",
              )}
              style={{ "--dir": direction } as CSSProperties}
            >
              {slide}
            </div>
          );
        })}
      </div>

      <div
        data-theme={tones[active]}
        className="container-site relative z-20 pb-8 lg:absolute lg:inset-x-0 lg:bottom-8 lg:pb-0"
      >
        <div className="lg:max-w-[620px]">
          <HeroControls
            total={total}
            active={active}
            isRunning={isRunning}
            intervalMs={intervalMs}
            labels={labels}
            onSelect={(index) => show(index, index > active ? 1 : -1)}
            onStep={(step) => show((active + step + total) % total, step)}
          />
        </div>
      </div>
    </div>
  );
}
