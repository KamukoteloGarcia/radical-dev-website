import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getContent } from "@/lib/preferences";

export async function HeroContent() {
  const { hero } = await getContent();
  const [firstLine, ...otherLines] = hero.lines;

  return (
    <div className="relative z-10 w-full min-w-0 max-w-[620px] lg:flex-1">
      <h1 className="font-display text-[1.9rem] font-semibold min-[380px]:text-[2.1rem] sm:text-[3.2rem] lg:text-[clamp(2.6rem,4.2vw,4rem)] leading-[1.1] tracking-[-0.02em] text-fg motion-safe:animate-rise">
        <span className="block">
          <span className="text-red">{hero.highlight}</span>
          {firstLine}
        </span>
        {otherLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>

      <p className="mt-5 max-w-[580px] text-[16px] leading-[1.6] text-muted motion-safe:animate-rise [animation-delay:150ms] sm:mt-6 sm:text-[19px]">
        {hero.description}
      </p>

      <div className="mt-8 flex flex-col gap-3 motion-safe:animate-rise [animation-delay:300ms] sm:mt-10 sm:flex-row sm:gap-4">
        <ButtonLink href={hero.primary.href}>
          {hero.primary.label}
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
        <ButtonLink href={hero.secondary.href} variant="outline">
          {hero.secondary.label}
        </ButtonLink>
      </div>
    </div>
  );
}
