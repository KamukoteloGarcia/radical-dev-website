"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Slide } from "@/config/content";
import { BannerSlide } from "./BannerSlide";
import { slideOffset } from "./cube";
import { SliderDots } from "./SliderDots";

const intervalMs = 3500;
const swipeThreshold = 30;

type BannerSliderProps = {
  slides: Slide[];
  cta: string;
  labels: { region: string; slide: string; of: string };
};

// Auto-playing banners that turn like a 3D cube.
// Pauses on hover/focus, supports swipe, and never auto-plays with reduced motion.
export function BannerSlider({ slides, cta, labels }: BannerSliderProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const isFirstRender = useRef(true);
  const total = slides.length;

  function go(step: number) {
    setActive((i) => (i + step + total) % total);
  }

  useEffect(() => {
    if (isPaused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [isPaused, total, active]);

  // The cube "breathes" back while it turns, for extra depth.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cubeRef.current?.animate([{ scale: 1 }, { scale: 0.84 }, { scale: 1 }], {
      duration: 900,
      easing: "cubic-bezier(0.65, 0, 0.35, 1)",
    });
  }, [active]);

  function handlePointerDown(event: PointerEvent) {
    startX.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent) {
    if (startX.current === null) return;
    const deltaX = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(deltaX) > swipeThreshold) go(deltaX < 0 ? 1 : -1);
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label={labels.region}
      className="mx-3 shrink-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="h-[160px] touch-pan-y select-none perspective-[700px]"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => (startX.current = null)}
      >
        <div ref={cubeRef} className="relative size-full transform-3d">
          {slides.map((slide, i) => (
            <BannerSlide
              key={slide.id}
              slide={slide}
              index={i}
              total={total}
              offset={slideOffset(i, active, total)}
              cta={cta}
              label={`${i + 1} ${labels.of} ${total}`}
            />
          ))}
        </div>
      </div>

      <SliderDots total={total} active={active} isPaused={isPaused} label={labels.slide} onSelect={setActive} />
    </section>
  );
}
