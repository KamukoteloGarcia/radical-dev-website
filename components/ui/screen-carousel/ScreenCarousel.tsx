"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { slideOffset, slideStyle, type CarouselEffect } from "./effects";

type ScreenCarouselProps = {
  images: string[];
  captions: string[];
  effect: CarouselEffect;
  /** Slide width in px (needed for the cube depth). */
  width: number;
  intervalMs?: number;
};

// Auto-playing photo banners for device screens, with a 3D transition.
// Pauses on hover and never auto-plays with reduced motion.
export function ScreenCarousel({ images, captions, effect, width, intervalMs = 3200 }: ScreenCarouselProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (isPaused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % total), intervalMs);
    return () => clearTimeout(id);
  }, [active, isPaused, total, intervalMs]);

  return (
    <div
      className="relative size-full select-none overflow-hidden bg-black perspective-[900px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((src, i) => {
        const offset = slideOffset(i, active, total);
        const isActive = offset === 0;
        return (
          <div
            key={src}
            aria-hidden={!isActive}
            className="absolute inset-0 overflow-hidden backface-hidden transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-opacity"
            style={{ ...slideStyle(effect, offset, width), zIndex: isActive ? 2 : 1 }}
          >
            <Image
              src={src}
              alt=""
              fill
              unoptimized
              draggable={false}
              className={cn(
                "object-cover transition-[scale] duration-[4000ms] ease-out motion-reduce:transition-none",
                isActive ? "scale-110" : "scale-100",
              )}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pb-2.5 pt-8 text-white">
              <p className="text-[8px] tracking-[0.16em] text-white/70">
                0{i + 1} / 0{total}
              </p>
              <p className="font-display text-[13px] font-semibold leading-tight">{captions[i]}</p>
            </div>
          </div>
        );
      })}

      <div className="absolute right-2.5 top-2.5 z-10 flex gap-1">
        {images.map((src, i) => (
          <span
            key={src}
            className={cn("h-1 rounded-full transition-all duration-300", i === active ? "w-4 bg-red" : "w-1 bg-white/60")}
          />
        ))}
      </div>
    </div>
  );
}
