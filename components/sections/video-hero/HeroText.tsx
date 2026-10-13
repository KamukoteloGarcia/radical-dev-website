import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";

export type HeroTextContent = {
  eyebrow: string;
  title: string;
  highlight: string;
  text: string;
  cta: { label: string; href: string };
};

// Eyebrow, page title with a red highlight, intro text and main button of an inner-page banner.
export function HeroText({ headingId, text }: { headingId: string; text: HeroTextContent }) {
  return (
    <>
      <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-red motion-safe:animate-rise">
        <span aria-hidden="true" className="h-[2px] w-10 rounded-full bg-red" />
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
    </>
  );
}
