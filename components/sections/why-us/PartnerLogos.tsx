"use client";

import Image from "next/image";
import { useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { partners } from "@/config/partners";
import { cn } from "@/lib/cn";

type PartnerLogosProps = { label: string; pauseLabel: string; playLabel: string };

// Infinite logo marquee: the track repeats the list twice and slides by exactly
// half its width, so the loop never has a visible seam. Pauses on hover/focus,
// and a toggle lets anyone stop the motion for good (it also opens paused).
export function PartnerLogos({ label, pauseLabel, playLabel }: PartnerLogosProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center gap-3">
        <p className="text-center text-[13px] font-medium uppercase tracking-[0.2em] text-subtle">{label}</p>
        <button
          type="button"
          aria-pressed={isPaused}
          aria-label={isPaused ? playLabel : pauseLabel}
          onClick={() => setIsPaused((value) => !value)}
          className="grid size-6 shrink-0 place-items-center rounded-full border border-line text-subtle transition hover:border-red hover:text-red"
        >
          {isPaused ? <PlayIcon className="size-3" /> : <PauseIcon className="size-3" />}
        </button>
      </div>

      <div
        className="group mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ul
          aria-label={label}
          className={cn(
            "flex w-max items-center gap-16 motion-safe:animate-marquee motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-10",
          )}
          style={{ animationPlayState: isPaused ? "paused" : "running" }}
        >
          {[...partners, ...partners].map(({ name, logo }, i) => (
            <li key={`${name}-${i}`} aria-hidden={i >= partners.length} className="flex shrink-0 justify-center">
              <Image
                src={logo}
                alt={name}
                width={240}
                height={80}
                unoptimized
                className="h-14 w-auto opacity-85 transition duration-300 hover:-translate-y-1 hover:opacity-100 sm:h-[72px]"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
