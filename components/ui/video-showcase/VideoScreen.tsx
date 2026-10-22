"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePageReady } from "@/lib/page-ready";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

type VideoScreenProps = { video: string; poster: string };

// One glass screen tilted in 3D with a looping, muted clip. Shows the poster frame to visitors
// who prefer reduced motion and pauses while it is off screen.
export function VideoScreen({ video, poster }: VideoScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );

  // The video starts once the splash has gone.
  const isReady = usePageReady();

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    if (prefersReducedMotion || !isReady) {
      element.pause();
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.play().catch(() => {});
      else element.pause();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion, isReady]);

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-[660px] perspective-[1600px]">
      <div className="transform-3d motion-safe:animate-drift">
        <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#0b0b0d] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85),0_0_60px_-10px_var(--glow)] ring-1 ring-red/50 [transform:rotateY(-16deg)_rotateX(4deg)]">
          <video ref={videoRef} src={video} poster={poster} muted loop playsInline preload="auto" className="size-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_38%)]" />
        </div>
      </div>
      <div className="absolute -bottom-[8%] left-[8%] h-[16%] w-[84%] rounded-[50%] bg-[radial-gradient(closest-side,var(--glow),transparent)] blur-md" />
    </div>
  );
}
