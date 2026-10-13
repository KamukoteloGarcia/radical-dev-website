import type { VideoClip } from "./video";

// Real footage for the Services banner, played in this order (Mixkit free license, see /public/videos/CREDITS.md).
// Each clip is 7.2s, 720p, muted, H.264 with faststart; the poster is its first frame.
export const serviceClips = [
  { id: "web", video: "/videos/services/web.mp4", poster: "/videos/services/web.webp" },
  { id: "mobile", video: "/videos/services/mobile.mp4", poster: "/videos/services/mobile.webp" },
  { id: "cloud", video: "/videos/services/cloud.mp4", poster: "/videos/services/cloud.webp" },
] as const satisfies readonly VideoClip[];

export type ServiceClipId = (typeof serviceClips)[number]["id"];

/** Length of every clip, used for the chapter progress bar. */
export const serviceClipSeconds = 7.2;

// One photo per client segment (Pexels free license, see /public/photos/CREDITS.md).
export const segmentPhotos = {
  institutional: "/photos/services/institutional.webp",
  private: "/photos/services/private.webp",
  individuals: "/photos/services/individuals.webp",
  ngos: "/photos/services/ngos.webp",
};

export type SegmentId = keyof typeof segmentPhotos;
