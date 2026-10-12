import type { VideoClip } from "./video";

// Real footage for the Careers banner, played in this order (Mixkit free license, see /public/videos/CREDITS.md).
// Each clip is 7.5s, 720p, muted, H.264 with faststart; the poster is its first frame.
export const careerClips = [
  { id: "interview", video: "/videos/careers/interview.mp4", poster: "/videos/careers/interview.webp" },
  { id: "team", video: "/videos/careers/culture.mp4", poster: "/videos/careers/culture.webp" },
  { id: "growth", video: "/videos/careers/growth.mp4", poster: "/videos/careers/growth.webp" },
] as const satisfies readonly VideoClip[];

export type CareerClipId = (typeof careerClips)[number]["id"];

/** Length of every clip, used for the chapter progress bar. */
export const careerClipSeconds = 7.5;

// Featured job photo and the open-positions cards (keys match content `careers.openings.items[].id`).
export const careerPhotos = {
  featured: "/photos/careers/featured.webp",
  hr: "/photos/careers/hr.webp",
  tech: "/photos/careers/tech.webp",
  marketing: "/photos/careers/marketing.webp",
};

export type OpeningId = "hr" | "tech" | "marketing";
