import { ArrowRightIcon } from "@/components/icons";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { VideoShowcase } from "@/components/ui/video-showcase/VideoShowcase";
import type { VideoClip, VideoControlsText } from "@/config/video";

export type VideoHeroText = {
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  cta: { label: string; href: string };
  controls: VideoControlsText;
};

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
// same floor and glow as the home hero. Used by Inovação and Carreiras.
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
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/5 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-muted motion-safe:animate-rise">
            <span className="size-1.5 rounded-full bg-red" />
            {text.eyebrow}
          </p>

          <h1
            id={headingId}
            className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-fg motion-safe:animate-rise [animation-delay:120ms]"
          >
            {text.title} <span className="text-red">{text.highlight}</span>
          </h1>

          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.65] text-muted motion-safe:animate-rise [animation-delay:240ms] sm:text-[18px]">
            {text.text}
          </p>

          <ButtonLink href={text.cta.href} className="mt-8 motion-safe:animate-rise [animation-delay:360ms]">
            {text.cta.label}
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </VideoShowcase>
      </div>
    </section>
  );
}
