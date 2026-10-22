import type { CSSProperties } from "react";

// Same shapes as components/brand/LogoMark (viewBox 0 0 40 40).
const bowl = "M5 4h16.5a11 11 0 0 1 0 22H14v10H5Zm9 8v6h7.2a3 3 0 0 0 0-6Z";
const leg = "M20 24.5h10L37 36H27Z";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

// The "R" drawing itself: the red outline is traced, then filled, and the white leg slides in.
// `pathLength={1}` lets the stroke be "drawn" with a simple dash animation.
export function SplashMark({ size = 120 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true" className="overflow-visible">
      <path
        d={bowl}
        fill="none"
        stroke="var(--red)"
        strokeWidth="0.9"
        strokeLinejoin="round"
        pathLength={1}
        className="splash-draw"
        style={delay(0)}
      />
      <path d={bowl} fill="var(--red)" fillRule="evenodd" className="splash-fill" style={delay(900)} />
      <path d={leg} fill="var(--fg)" className="splash-leg" style={delay(1250)} />
    </svg>
  );
}
