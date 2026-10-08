"use client";

import { useState } from "react";
import { segments } from "@/config/navigation";
import { cn } from "@/lib/cn";

export function SegmentTabs() {
  const [active, setActive] = useState(segments[0]);

  return (
    <nav
      aria-label="Segmentos"
      className="flex min-w-0 items-center gap-6 overflow-x-auto [scrollbar-width:none] lg:gap-[43px]"
    >
      {segments.map((segment) => (
        <button
          key={segment}
          type="button"
          aria-pressed={segment === active}
          onClick={() => setActive(segment)}
          className={cn(
            "whitespace-nowrap py-2 text-[15px] transition-colors sm:text-[19px]",
            segment === active
              ? "font-bold text-fg underline decoration-[2.5px] underline-offset-[7px]"
              : "font-medium text-fg/65 hover:text-fg",
          )}
        >
          {segment}
        </button>
      ))}
    </nav>
  );
}
