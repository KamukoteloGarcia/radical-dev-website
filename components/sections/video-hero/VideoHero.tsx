import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { VideoShowcase } from "@/components/ui/video-showcase/VideoShowcase";
import type { VideoClip, VideoControlsText } from "@/config/video";
import { HeroText, type HeroTextContent } from "./HeroText";

export type VideoHeroText = HeroTextContent & { controls: VideoControlsText };

type VideoHeroProps = {
  /** Section id, also used for the heading id. */
  id: string;
  text: VideoHeroText;
  clips: readonly VideoClip[];
  clipSeconds: number;
  /** Chapter name of each clip, in the same order. */
  labels: string[];
};

// Single 3D banner (no slider) for inner pages: real footage on a deck of glass screens,
// same floor and glow as the home hero. Used by Inovação, Carreiras and Sobre nós.
export function VideoHero({ id, text, clips, clipSeconds, labels }: VideoHeroProps) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="relative isolate flex min-h-[640px] flex-1 items-center overflow-hidden bg-bg lg:min-h-[calc(100svh-126px)]"
    >
      <HeroBackground />

      <div className="container-site py-16 lg:py-20">
        <VideoShowcase clips={clips} clipSeconds={clipSeconds} labels={labels} controls={text.controls}>
          <HeroText headingId={headingId} text={text} />
        </VideoShowcase>
      </div>
    </section>
  );
}
