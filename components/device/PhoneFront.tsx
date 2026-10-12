import type { ReactNode } from "react";
import { phone } from "./dimensions";

// Front face: black bezel, screen, dynamic island and glass glare.
export function PhoneFront({ children }: { children: ReactNode }) {
  const { depth, radius, bezel } = phone;

  return (
    <div
      className="absolute inset-0 bg-[#050506] ring-1 ring-white/15 backface-hidden"
      style={{ borderRadius: radius, padding: bezel, transform: `translateZ(${depth / 2}px)` }}
    >
      <div className="relative size-full overflow-hidden bg-[#0c0c0f]" style={{ borderRadius: radius - bezel }}>
        {children}
        <span className="absolute left-1/2 top-[10px] z-20 h-[24px] w-[80px] -translate-x-1/2 rounded-full bg-black" />
        <span className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(115deg,rgba(255,255,255,0.12),transparent_38%)]" />
      </div>
    </div>
  );
}
