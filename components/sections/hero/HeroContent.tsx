import { ArrowRightIcon, ChatIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { heroContent } from "@/config/hero";

export function HeroContent() {
  const { title, description, primaryCta, secondaryCta } = heroContent;

  return (
    <div className="min-w-0 max-w-[660px] flex-1">
      <h1 className="font-display text-[44px] font-extrabold leading-[0.95] tracking-[-0.01em] sm:text-[64px] lg:text-[62px] xl:text-[70px] 2xl:text-[78px] 2xl:leading-[0.9]">
        {title[0]} <br className="hidden sm:block" />
        {title[1]}
      </h1>

      <p className="mt-6 max-w-[565px] font-display text-[17px] leading-[1.55] text-body sm:mt-[34px] sm:text-[19px] sm:leading-[29px]">
        {description}
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:mt-[48px] sm:flex-row sm:flex-wrap sm:gap-[21px]">
        <ButtonLink
          href={primaryCta.href}
          className="sm:w-[320px]"
          icon={
            <ArrowRightIcon
              className="size-[26px] transition-transform group-hover:translate-x-1"
              strokeWidth={2.2}
            />
          }
        >
          {primaryCta.label}
        </ButtonLink>
        <ButtonLink
          href={secondaryCta.href}
          variant="outline"
          className="sm:w-[262px]"
          icon={<ChatIcon className="size-[24px]" />}
        >
          {secondaryCta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
