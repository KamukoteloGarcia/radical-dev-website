// Real footage for the Innovation banner, played in this order (Mixkit free license, see /public/videos/CREDITS.md).
// Each clip is 8s, 720p, muted, H.264 with faststart; the poster is its first frame.
export const innovationClips = [
  { id: "prototype", video: "/videos/innovation/prototype.mp4", poster: "/videos/innovation/prototype.webp" },
  { id: "product", video: "/videos/innovation/product.mp4", poster: "/videos/innovation/product.webp" },
  { id: "cloud", video: "/videos/innovation/cloud.mp4", poster: "/videos/innovation/cloud.webp" },
] as const;

export type InnovationClip = (typeof innovationClips)[number];
export type InnovationClipId = InnovationClip["id"];

/** Length of every clip, used for the chapter progress bar. */
export const clipSeconds = 8;
