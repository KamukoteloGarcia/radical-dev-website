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
