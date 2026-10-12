import { LogoMark } from "@/components/brand/LogoMark";
import { phone } from "./dimensions";

const lenses = ["left-3 top-3", "right-3 top-3", "left-3 bottom-3"];

// Back face: cameras and logo (visible when the phone turns around).
export function PhoneBack() {
  const { depth, radius } = phone;

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[linear-gradient(150deg,#3a0b12,#141417_45%,#1f1f25)] ring-1 ring-white/10 backface-hidden"
      style={{ borderRadius: radius, transform: `rotateY(180deg) translateZ(${depth / 2}px)` }}
    >
      <div className="absolute left-5 top-5 size-[96px] rounded-[28px] bg-white/[0.06] ring-1 ring-white/10">
        {lenses.map((position) => (
          <span
            key={position}
            className={`absolute size-[34px] rounded-full bg-[radial-gradient(circle,#2a2a35_20%,#050506_60%)] ring-[3px] ring-[#2c2c33] ${position}`}
          />
        ))}
        <span className="absolute bottom-5 right-5 size-[10px] rounded-full bg-[#f5e6c8]/80" />
      </div>

      <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2 text-white">
        <LogoMark className="size-16" />
        <span className="font-display text-[13px] font-medium tracking-[0.3em] text-white/70">RADICAL DEV</span>
      </div>
    </div>
  );
}
