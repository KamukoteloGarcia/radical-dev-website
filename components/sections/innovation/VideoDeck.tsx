"use client";

import { useEffect, useRef } from "react";
import type { InnovationClip } from "@/config/innovation";
import { cn } from "@/lib/cn";

// Where each card sits in the deck: 0 = front (playing), then further back and up.
const slots = [
  { transform: "translate3d(0, 0, 0) rotateY(-18deg) rotateX(4deg)", opacity: 1 },
  { transform: "translate3d(15%, -11%, -190px) rotateY(-18deg) rotateX(4deg)", opacity: 0.55 },
  { transform: "translate3d(28%, -21%, -380px) rotateY(-18deg) rotateX(4deg)", opacity: 0.28 },
];

type VideoDeckProps = {
  clips: readonly InnovationClip[];
  labels: string[];
  active: number;
  playing: boolean;
  onEnded: () => void;
};

// Real footage on glass screens stacked in 3D. On each change the front screen
// slides to the back and the next one comes forward.
export function VideoDeck({ clips, labels, active, playing, onEnded }: VideoDeckProps) {
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const shownClip = useRef(active);

  useEffect(() => {
    // A newly selected clip always starts from the beginning.
    if (shownClip.current !== active) {
      const next = videos.current[active];
      if (next) next.currentTime = 0;
      shownClip.current = active;
    }
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && playing) video.play().catch(() => {});
      else video.pause();
    });
  }, [active, playing]);

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[16/11] w-full max-w-[720px] perspective-[1600px]">
      <div className="absolute inset-0 transform-3d motion-safe:animate-drift">
        {clips.map((clip, i) => {
          const slot = (i - active + clips.length) % clips.length;
          const isFront = slot === 0;
          return (
            <div
              key={clip.id}
              className="absolute left-0 top-[24%] w-[80%] transition-[transform,opacity] duration-[1100ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{ ...slots[slot], zIndex: clips.length - slot }}
            >
              <div
                className={cn(
                  "relative aspect-video overflow-hidden rounded-[18px] bg-[#0b0b0d] ring-1 transition-shadow duration-700",
                  isFront
                    ? "shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85),0_0_60px_-10px_var(--glow)] ring-red/50"
                    : "shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] ring-white/15",
                )}
              >
                <video
                  ref={(el) => {
                    videos.current[i] = el;
                  }}
                  src={clip.video}
                  poster={clip.poster}
                  muted
                  playsInline
                  preload={isFront || slot === 1 ? "auto" : "none"}
                  onEnded={isFront ? onEnded : undefined}
                  className="size-full object-cover"
                />
                {/* Glass reflection + caption bar */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_38%)]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-8 text-[12px] font-medium text-white sm:text-[13px]">
                  <span className={cn("size-2 rounded-full", isFront ? "bg-red motion-safe:animate-pulse" : "bg-white/40")} />
                  <span className="font-display tabular-nums text-white/60">0{i + 1}</span>
                  {labels[i]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Red glow on the floor under the deck */}
      <div className="absolute -bottom-[4%] left-[6%] h-[18%] w-[80%] rounded-[50%] bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-md" />
    </div>
  );
}
