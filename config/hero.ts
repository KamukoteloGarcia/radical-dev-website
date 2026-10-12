// Hero banners, in display order. `tone: "light"` forces the light palette on that banner.
export const heroSlides = [
  { id: "mobile" },
  { id: "web", tone: "light" },
  { id: "data" },
  { id: "design" },
  { id: "team" },
] as const satisfies ReadonlyArray<{ id: string; tone?: "light" }>;

export type HeroSlideId = (typeof heroSlides)[number]["id"];

export const heroIntervalMs = 8000;
