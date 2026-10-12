import type { CSSProperties } from "react";

export type CarouselEffect = "flip" | "cube" | "depth";

/** Shortest signed distance from the active slide, e.g. -1 = previous, 1 = next. */
export function slideOffset(index: number, active: number, total: number) {
  const half = Math.floor(total / 2);
  return ((index - active + total + half) % total) - half;
}

// 3D position of a slide for each transition style.
export function slideStyle(effect: CarouselEffect, offset: number, width: number): CSSProperties {
  const isNear = Math.abs(offset) <= 1;

  switch (effect) {
    case "cube":
      return {
        transform: `rotateY(${offset * 90}deg)`,
        transformOrigin: `50% 50% -${width / 2}px`,
        opacity: isNear ? 1 : 0,
      };
    case "flip":
      return { transform: `rotateY(${offset * 180}deg)`, opacity: isNear ? 1 : 0 };
    case "depth":
      return {
        transform: `translateZ(${offset > 0 ? -240 : offset < 0 ? 160 : 0}px)`,
        opacity: offset === 0 ? 1 : 0,
      };
  }
}
