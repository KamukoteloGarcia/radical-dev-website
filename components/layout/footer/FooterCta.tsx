import { ArrowRightIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Content } from "@/config/content";

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
  transform: "perspective(600px) rotateX(64deg)",
};

// Red call-to-action card with a perspective grid floor; tilts back slightly on hover.
export function FooterCta({ cta }: { cta: Content["footer"]["cta"] }) {
  return (
    <div className="group perspective-[1200px]">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,var(--red),var(--red-deep))] px-6 py-10 text-white shadow-[0_30px_80px_-30px_var(--glow)] transition-transform duration-500 ease-out sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:py-14 motion-safe:group-hover:[transform:rotateX(5deg)_translateY(-4px)]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_top,#000,transparent_75%)]">
          <div className="absolute inset-x-[-25%] bottom-0 h-[160%] origin-bottom" style={gridStyle} />
        </div>
        <span aria-hidden="true" className="absolute -right-16 -top-20 -z-10 size-64 rounded-full bg-white/10" />

        <div className="max-w-[640px]">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/75">{cta.eyebrow}</p>
          <h2 className="mt-3 font-display text-[1.9rem] font-semibold leading-[1.15] sm:text-[2.6rem]">{cta.title}</h2>
          <p className="mt-3 text-[16px] leading-relaxed text-white/85 sm:text-[18px]">{cta.text}</p>
        </div>

        <ButtonLink href={cta.button.href} variant="inverse" className="mt-8 w-full shrink-0 sm:w-auto lg:mt-0">
          {cta.button.label}
          <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
        </ButtonLink>
      </div>
    </div>
  );
}
