"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type SegmentTabsProps = { items: string[]; label: string };

export function SegmentTabs({ items, label }: SegmentTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <nav
      aria-label={label}
      className="flex min-w-0 items-center gap-6 overflow-x-auto pr-6 [mask-image:linear-gradient(to_right,#000_80%,transparent)] [scrollbar-width:none] sm:pr-0 sm:[mask-image:none] lg:gap-8"
    >
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          aria-pressed={i === active}
          onClick={() => setActive(i)}
          className={cn(
            "relative whitespace-nowrap py-3 text-[15px] transition-colors",
            "after:absolute after:inset-x-0 after:bottom-[7px] after:h-px after:origin-left after:bg-red after:transition-transform after:duration-300",
            i === active ? "text-red after:scale-x-100" : "text-muted after:scale-x-0 hover:text-fg",
          )}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
