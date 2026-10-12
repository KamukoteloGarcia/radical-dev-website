// Banner illustrations live in /public/banners. `tone` is the background brightness,
// used to pick a readable text color.
export const banners = {
  solutions: { image: "/banners/solutions.svg", tone: "dark" },
  ai: { image: "/banners/ai.svg", tone: "light" },
  careers: { image: "/banners/careers.svg", tone: "light" },
  ecosystem: { image: "/banners/ecosystem.svg", tone: "light" },
  academy: { image: "/banners/academy.svg", tone: "light" },
} as const;

export type BannerId = keyof typeof banners;
