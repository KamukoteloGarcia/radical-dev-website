import type { VideoClip } from "./video";

// Real footage for the Ecosystem banner, played in this order (Mixkit free license, see /public/videos/CREDITS.md).
// Each clip is 7.5s, 720p, muted, H.264 with faststart; the poster is its first frame.
export const ecosystemClips = [
  { id: "startups", video: "/videos/ecosystem/startups.mp4", poster: "/videos/ecosystem/startups.webp" },
  { id: "partners", video: "/videos/ecosystem/partners.mp4", poster: "/videos/ecosystem/partners.webp" },
  { id: "community", video: "/videos/ecosystem/community.mp4", poster: "/videos/ecosystem/community.webp" },
] as const satisfies readonly VideoClip[];

export type EcosystemClipId = (typeof ecosystemClips)[number]["id"];

/** Length of every clip, used for the chapter progress bar. */
export const ecosystemClipSeconds = 7.5;

// Photos (Pexels free license, see /public/photos/CREDITS.md). Startup keys match content `ecosystem.startups.items[].id`.
export const ecosystemPhotos = {
  academy: "/photos/ecosystem/academy.webp",
  startups: {
    agro: "/photos/ecosystem/agro.webp",
    health: "/photos/ecosystem/health.webp",
    market: "/photos/ecosystem/market.webp",
  },
};

export type StartupId = keyof typeof ecosystemPhotos.startups;
