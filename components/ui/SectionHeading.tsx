import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
  /** Smaller title with the accent bars hugging the text. */
  compact?: boolean;
};

// Centered section title with red accent bars on both sides (desktop) and an optional subtitle.
export function SectionHeading({ title, subtitle, id, compact = false }: SectionHeadingProps) {
  const bar = cn("hidden w-[3px] shrink-0 rounded-full bg-red md:block", compact ? "h-8" : "h-11");

  return (
    <div className="mx-auto max-w-[920px] text-center">
      <div className={cn("flex items-center justify-center", compact ? "gap-3" : "gap-10")}>
        <span aria-hidden="true" className={bar} />
        <h2
          id={id}
          className={cn(
            "font-display font-semibold leading-[1.15] tracking-[-0.01em] text-fg",
            compact ? "text-[clamp(1.6rem,2.6vw,2.25rem)]" : "text-[clamp(1.8rem,3.4vw,2.9rem)]",
          )}
        >
          {title}
        </h2>
        <span aria-hidden="true" className={bar} />
      </div>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 text-muted",
            compact ? "max-w-[600px] text-[15px] leading-relaxed sm:text-[16px]" : "max-w-[760px] text-[17px] leading-relaxed sm:text-[19px]",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
