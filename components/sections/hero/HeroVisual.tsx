import type { ReactNode } from "react";
import { Stage } from "@/components/scene/Stage";

// Scenes are drawn on a fixed 680×620 canvas and scaled per breakpoint.
export function HeroVisual({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="relative h-[298px] w-full shrink-0 min-[400px]:h-[335px] sm:h-[465px] lg:h-[446px] lg:w-[490px] xl:h-[589px] xl:w-[646px] 2xl:h-[620px] 2xl:w-[680px]"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[680px] origin-top -translate-x-1/2 scale-48 min-[400px]:scale-54 sm:scale-75 lg:scale-72 xl:scale-95 2xl:scale-100">
        <Stage>{children}</Stage>
      </div>
    </div>
  );
}
