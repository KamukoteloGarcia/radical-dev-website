import { ArrowRightIcon } from "@/components/icons";
import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { innovationClips } from "@/config/innovation";
import { getContent } from "@/lib/preferences";
import { InnovationShowcase } from "./InnovationShowcase";

// Single 3D banner (no slider): real footage on a deck of glass screens, same floor and glow as the home hero.
export async function InnovationHero() {
  const { innovation } = await getContent();
  const labels = innovationClips.map((clip) => innovation.chapters[clip.id]);

  return (
    <section
      id="inovacao"
      aria-labelledby="inovacao-titulo"
      className="relative isolate flex min-h-[640px] flex-1 items-center overflow-hidden bg-bg lg:min-h-[calc(100svh-126px)]"
    >
      <HeroBackground />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <InnovationShowcase labels={labels} controls={innovation.controls}>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-fg/5 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.2em] text-muted motion-safe:animate-rise">
            <span className="size-1.5 rounded-full bg-red" />
            {innovation.eyebrow}
          </p>

          <h1
            id="inovacao-titulo"
            className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-fg motion-safe:animate-rise [animation-delay:120ms]"
          >
            {innovation.title} <span className="text-red">{innovation.highlight}</span>
          </h1>

          <p className="mt-5 max-w-[540px] text-[16px] leading-[1.65] text-muted motion-safe:animate-rise [animation-delay:240ms] sm:text-[18px]">
            {innovation.text}
          </p>

          <ButtonLink href={innovation.cta.href} className="mt-8 motion-safe:animate-rise [animation-delay:360ms]">
            {innovation.cta.label}
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </InnovationShowcase>
      </div>
    </section>
  );
}
