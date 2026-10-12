type SectionHeadingProps = { title: string; subtitle?: string; id?: string };

// Centered section title with red accent bars on both sides (desktop) and an optional subtitle.
export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-[920px] text-center">
      <div className="flex items-center justify-center gap-10">
        <span aria-hidden="true" className="hidden h-11 w-[3px] shrink-0 rounded-full bg-red md:block" />
        <h2 id={id} className="font-display text-[clamp(1.8rem,3.4vw,2.9rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-fg">
          {title}
        </h2>
        <span aria-hidden="true" className="hidden h-11 w-[3px] shrink-0 rounded-full bg-red md:block" />
      </div>
      {subtitle && <p className="mx-auto mt-4 max-w-[760px] text-[17px] leading-relaxed text-muted sm:text-[19px]">{subtitle}</p>}
    </div>
  );
}
