import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { HeroText } from "@/config/content/pt";

type HeroContentProps = {
  text: HeroText;
  /** Only the first banner is the page's main heading. */
  heading: "h1" | "h2";
};

export function HeroContent({ text, heading: Heading }: HeroContentProps) {
  const [firstLine, ...otherLines] = text.lines;

  return (
    <div className="relative z-10 w-full min-w-0 max-w-[620px] lg:flex-1">
      <Heading className="font-display text-[1.9rem] font-semibold leading-[1.1] tracking-[-0.02em] text-fg motion-safe:animate-rise min-[380px]:text-[2.1rem] sm:text-[3.2rem] lg:text-[clamp(2.6rem,4.2vw,4rem)]">
        <span className="block">
          <span className="text-red">{text.highlight}</span>
          {firstLine}
        </span>
        {otherLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </Heading>

      <p className="mt-5 max-w-[580px] text-[16px] leading-[1.6] text-muted motion-safe:animate-rise [animation-delay:150ms] sm:mt-6 sm:text-[19px]">
        {text.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:300ms] sm:mt-10 sm:flex-row sm:gap-4">
        <ButtonLink href={text.primary.href}>
          {text.primary.label}
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
        <ButtonLink href={text.secondary.href} variant="outline">
          {text.secondary.label}
        </ButtonLink>
      </div>
    </div>
  );
}
