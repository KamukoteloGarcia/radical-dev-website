"use client";

import type { VideoControlsText } from "@/config/video";
import { cn } from "@/lib/cn";

type ChapterNavProps = {
  clipSeconds: number;
  labels: string[];
  active: number;
  playing: boolean;
  onSelect: (index: number) => void;
  text: VideoControlsText;
};

// "01 Prototipagem · 02 Produto · 03 Cloud" with a progress bar per scene; click a scene to jump to it.
export function ChapterNav({ clipSeconds, labels, active, playing, onSelect, text }: ChapterNavProps) {
  return (
    <ol aria-label={text.chapters} className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
      {labels.map((label, i) => (
        <li key={label}>
          <button
            type="button"
            onClick={() => onSelect(i)}
            aria-current={i === active ? "step" : undefined}
            aria-label={`${text.goTo} ${i + 1}: ${label}`}
            className="group block w-full py-2 text-left"
          >
            <span className="block h-[3px] overflow-hidden rounded-full bg-fg/15">
              {i < active && <span className="block h-full bg-red" />}
              {i === active && (
                <span
                  key={active}
                  className="block h-full origin-left bg-red motion-safe:animate-progress motion-reduce:scale-x-100"
                  style={{ animationDuration: `${clipSeconds}s`, animationPlayState: playing ? "running" : "paused" }}
                />
              )}
            </span>
            <span className="mt-2.5 flex items-baseline gap-2 text-[13px]">
              <span className={cn("font-display tabular-nums", i === active ? "text-red" : "text-subtle")}>0{i + 1}</span>
              <span
                className={cn(
                  "hidden truncate transition-colors sm:inline",
                  i === active ? "text-fg" : "text-subtle group-hover:text-fg",
                )}
              >
                {label}
              </span>
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
}
