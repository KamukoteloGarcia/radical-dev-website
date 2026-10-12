"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { VideoClip, VideoControlsText } from "@/config/video";
import { ChapterNav } from "./ChapterNav";
import { VideoDeck } from "./VideoDeck";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

type VideoShowcaseProps = {
  /** Title, text and button (rendered on the server). */
  children: ReactNode;
  clips: readonly VideoClip[];
  /** Length of every clip, for the chapter progress bar. */
  clipSeconds: number;
  labels: string[];
  controls: VideoControlsText;
};

// Owns the playback state shared by the chapter bar (left) and the 3D video deck (right).
// Videos stay still for visitors who prefer reduced motion (they can still press play)
// and pause while the banner is off screen.
export function VideoShowcase({ children, clips, clipSeconds, labels, controls }: VideoShowcaseProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const isPaused = userPaused ?? prefersReducedMotion;
  const playing = !isPaused && isVisible;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting));
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-8">
      <div>
        {children}
        <ChapterNav
          clipSeconds={clipSeconds}
          labels={labels}
          active={active}
          playing={playing}
          isPaused={isPaused}
          onSelect={setActive}
          onTogglePause={() => setUserPaused(!isPaused)}
          text={controls}
        />
      </div>

      <VideoDeck
        clips={clips}
        labels={labels}
        active={active}
        playing={playing}
        onEnded={() => setActive((current) => (current + 1) % clips.length)}
      />
    </div>
  );
}
