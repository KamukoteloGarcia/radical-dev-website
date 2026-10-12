"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Content } from "@/config/content";
import type { SectorId } from "@/config/content/pt";
import { cn } from "@/lib/cn";
import { SectorPanel } from "./SectorPanel";

type SectorTabsProps = {
  items: Content["sectors"]["items"];
  photos: Record<SectorId, string>;
  explore: string;
};

// Pill tabs (ARIA tabs pattern: click or arrow keys); the panel enters with a 3D tip.
export function SectorTabs({ items, photos, explore }: SectorTabsProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const sector = items[active];

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
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.id}
              ref={(element) => {
                tabRefs.current[i] = element;
              }}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="sector-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition",
                isActive
                  ? "border-fg bg-fg text-bg"
                  : "border-line bg-card text-fg/75 hover:border-red hover:text-red",
              )}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div
        key={sector.id}
        id="sector-panel"
        role="tabpanel"
        aria-labelledby={`tab-${sector.id}`}
        className="mt-6"
      >
        <SectorPanel sector={sector} image={photos[sector.id]} explore={explore} />
      </div>
    </div>
  );
}
