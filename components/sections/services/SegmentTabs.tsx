"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { ServicesContent } from "@/config/content/services/pt";
import type { SegmentId } from "@/config/services";
import { cn } from "@/lib/cn";
import { SegmentPanel } from "./SegmentPanel";

type SegmentTabsProps = {
  segments: ServicesContent["segments"];
  photos: Record<SegmentId, string>;
};

// Pill tabs for Institucional / Privadas / Particulares / ONGs (ARIA tabs: click or arrow keys).
export function SegmentTabs({ segments, photos }: SegmentTabsProps) {
  const { items } = segments;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const segment = items[active];

  function select(index: number) {
    const next = (index + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent) {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    select(moves[event.key]);
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={segments.tabsLabel}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="-mx-5 flex justify-start gap-2.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[i] = element;
              }}
              id={`segment-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="segment-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full border px-6 py-2.5 text-[14px] font-medium transition",
                isActive ? "border-fg bg-fg text-bg" : "border-line bg-card text-fg/75 hover:border-red hover:text-red",
              )}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div key={segment.id} id="segment-panel" role="tabpanel" aria-labelledby={`segment-tab-${segment.id}`} className="mt-8">
        <SegmentPanel segment={segment} image={photos[segment.id]} cta={segments.cta} />
      </div>
    </div>
  );
}
