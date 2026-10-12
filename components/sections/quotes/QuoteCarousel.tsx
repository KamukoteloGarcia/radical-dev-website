"use client";

import Image from "next/image";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRightIcon, QuoteIcon } from "@/components/icons";
import { slideOffset } from "@/components/ui/screen-carousel/effects";
import type { Content } from "@/config/content";
import { cn } from "@/lib/cn";

const intervalMs = 3000;

// Next quote rises from below, the previous one tips away upwards (3D, around the X axis).
function quoteStyle(offset: number): CSSProperties {
  if (offset === 0) return { transform: "none", opacity: 1 };
  const dir = offset > 0 ? 1 : -1;
  return { transform: `translateY(${dir * 40}px) rotateX(${dir * -35}deg)`, opacity: 0 };
}

type QuoteCarouselProps = {
  items: Content["quotes"]["items"];
  photos: string[];
  labels: { goTo: string; previous: string; next: string };
};

const arrowButton =
  "grid size-10 shrink-0 place-items-center rounded-full border border-fg/20 text-fg/80 transition hover:border-red hover:bg-red hover:text-white sm:absolute sm:top-1/2 sm:-translate-y-1/2";

export function QuoteCarousel({ items, photos, labels }: QuoteCarouselProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = items.length;

  function step(delta: 1 | -1) {
    setActive((i) => (i + delta + total) % total);
  }

  useEffect(() => {
    if (isPaused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => step(1), intervalMs);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused, total]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <button
        type="button"
        aria-label={labels.previous}
        onClick={() => step(-1)}
        className={cn(arrowButton, "sm:-left-2 lg:-left-14")}
      >
        <ArrowRightIcon className="size-4 rotate-180" />
      </button>
      <button
        type="button"
        aria-label={labels.next}
        onClick={() => step(1)}
        className={cn(arrowButton, "sm:-right-2 lg:-right-14")}
      >
        <ArrowRightIcon className="size-4" />
      </button>

      <div className="mx-auto max-w-[680px] px-14 sm:px-16">
        <div className="grid perspective-[1000px]">
          {items.map((quote, i) => {
            const offset = slideOffset(i, active, total);
            const isActive = offset === 0;
            return (
              <figure
                key={quote.author}
                aria-hidden={!isActive}
                inert={!isActive}
                className="flex flex-col items-center text-center transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] [grid-area:1/1] motion-reduce:transition-opacity"
                style={quoteStyle(offset)}
              >
                <QuoteIcon className="size-8 text-red" />
                <blockquote className="mt-4 text-[17px] font-light leading-[1.55] text-fg/90 sm:text-[19px]">
                  <p>“{quote.text}”</p>
                </blockquote>
                <figcaption className="mt-6 flex flex-col items-center">
                  <span className="relative size-[52px] overflow-hidden rounded-full ring-2 ring-red ring-offset-4 ring-offset-bg">
                    <Image src={photos[i]} alt="" fill unoptimized className="object-cover" />
                  </span>
                  <span className="mt-3 text-[14px] font-semibold text-fg">{quote.author}</span>
                  <span className="mt-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-red">{quote.role}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((quote, i) => (
          <button
            key={quote.author}
            type="button"
            aria-label={`${labels.goTo} ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            className="grid h-6 place-items-center"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-300",
                i === active ? "w-7 bg-red" : "w-1.5 bg-fg/25 hover:bg-fg/50",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
