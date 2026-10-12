// Geometry for the 3D cube transition between banners.
export const slideWidth = 208; // screen width (232) minus the slider margins
export const cubeOrigin = `50% 50% -${slideWidth / 2}px`;

/** Shortest signed distance from the active slide, e.g. -1 = previous, 1 = next. */
export function slideOffset(index: number, active: number, total: number) {
  const half = Math.floor(total / 2);
  return ((index - active + total + half) % total) - half;
}
