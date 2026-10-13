import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type SplitHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
  link: { label: string; href: string };
};

// Left: title with a red vertical bar and a subtitle. Right: "Ver mais →" style link.
export function SplitHeading({ id, title, subtitle, link }: SplitHeadingProps) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2
          id={id}
          className="flex items-center gap-5 font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-tight tracking-[-0.01em]"
        >
          {title}
          <span aria-hidden="true" className="h-[0.9em] w-[5px] shrink-0 rounded-full bg-red" />
        </h2>
        <p className="mt-2 text-[17px] text-muted sm:text-[22px]">{subtitle}</p>
      </div>

      <Link
        href={link.href}
        className="group inline-flex shrink-0 items-center gap-2 text-[17px] text-fg transition-colors hover:text-red sm:text-[20px]"
      >
        {link.label}
        <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
