import type { VideoClip } from "./video";

// Real footage for the About banner, played in this order (Mixkit free license, see /public/videos/CREDITS.md).
// Each clip is 7.5s, 720p, muted, H.264 with faststart; the poster is its first frame.
export const aboutClips = [
  { id: "vision", video: "/videos/about/vision.mp4", poster: "/videos/about/vision.webp" },
  { id: "talent", video: "/videos/about/talent.mp4", poster: "/videos/about/talent.webp" },
  { id: "roots", video: "/videos/about/roots.mp4", poster: "/videos/about/roots.webp" },
] as const satisfies readonly VideoClip[];

export type AboutClipId = (typeof aboutClips)[number]["id"];

/** Length of every clip, used for the chapter progress bar. */
export const aboutClipSeconds = 7.5;

// Photos for the About sections (Pexels free license, see /public/photos/CREDITS.md).
export const aboutPhotos = {
  office: "/photos/about/office.webp",
  team: "/photos/about/team.webp",
};
