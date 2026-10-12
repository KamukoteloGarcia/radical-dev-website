import type { SectorId } from "@/config/content/pt";

// Real photos (WebP, pre-sized) in /public/photos. Credits: /public/photos/CREDITS.md.
// Each list lines up with the captions in content `screens`.
export const screenPhotos = {
  web: [
    "/photos/web/portals.webp",
    "/photos/web/stores.webp",
    "/photos/web/management.webp",
    "/photos/web/learning.webp",
    "/photos/web/custom.webp",
  ],
  data: [
    "/photos/data/analytics.webp",
    "/photos/data/bi.webp",
    "/photos/data/teams.webp",
    "/photos/data/realtime.webp",
    "/photos/data/decisions.webp",
  ],
  design: [
    "/photos/design/research.webp",
    "/photos/design/interfaces.webp",
    "/photos/design/mobility.webp",
    "/photos/design/testing.webp",
    "/photos/design/customer.webp",
  ],
  team: [
    "/photos/team/engineering.webp",
    "/photos/team/design.webp",
    "/photos/team/data.webp",
    "/photos/team/cloud.webp",
    "/photos/team/projects.webp",
  ],
};

export type ScreenId = keyof typeof screenPhotos;

export const heroPerson = "/photos/web/person.webp";

// Solutions bento: big card + the two side cards (same order as content `solutions.cards`).
export const solutionPhotos = {
  featured: "/photos/solutions/institutional.webp",
  cards: ["/photos/solutions/government.webp", "/photos/solutions/ngo.webp"],
};

export const sectorPhotos: Record<SectorId, string> = {
  banking: "/photos/sectors/banking.webp",
  energy: "/photos/sectors/energy.webp",
  public: "/photos/sectors/public.webp",
  mining: "/photos/sectors/mining.webp",
  other: "/photos/sectors/other.webp",
};

// Avatars for the quotes, in the same order as content `quotes.items`.
export const quotePhotos = [1, 2, 3, 4, 5].map((n) => `/photos/quotes/${n}.webp`);

// Innovation page: lab section photo.
export const innovationPhotos = {
  lab: "/photos/innovation/lab.webp",
};

// Innovation page: featured projects (keys match content `innovation.projects.items[].id`).
export const projectPhotos = {
  community: "/photos/projects/community.webp",
  fintech: "/photos/projects/fintech.webp",
  corporate: "/photos/projects/corporate.webp",
};

export type ProjectId = keyof typeof projectPhotos;
