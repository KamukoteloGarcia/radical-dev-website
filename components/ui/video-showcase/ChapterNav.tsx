"use client";

import { PauseIcon, PlayIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

type ChapterNavProps = {
  clipSeconds: number;
  labels: string[];
  active: number;
  playing: boolean;
  isPaused: boolean;
  onSelect: (index: number) => void;
  onTogglePause: () => void;
  text: { chapters: string; goTo: string; pause: string; play: string };
};

// "01 Prototipagem · 02 Produto · 03 Cloud" with a progress bar per scene, plus pause/play.
export function ChapterNav({ clipSeconds, labels, active, playing, isPaused, onSelect, onTogglePause, text }: ChapterNavProps) {
  return (
    <div className="mt-10 flex items-end gap-4 sm:gap-6">
      <ol aria-label={text.chapters} className="grid flex-1 grid-cols-3 gap-3 sm:gap-5">
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

      <button
        type="button"
        onClick={onTogglePause}
        aria-label={isPaused ? text.play : text.pause}
        className="mb-1 grid size-11 shrink-0 place-items-center rounded-full border border-fg/20 text-fg transition hover:border-red hover:bg-red hover:text-white"
      >
        {isPaused ? <PlayIcon className="size-4" /> : <PauseIcon className="size-4" />}
      </button>
    </div>
  );
}
