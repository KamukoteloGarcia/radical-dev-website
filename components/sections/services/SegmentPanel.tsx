import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/icons";
import type { ServicesContent } from "@/config/content/services/pt";

type SegmentPanelProps = {
  segment: ServicesContent["segments"]["items"][number];
  image: string;
  cta: string;
};

// Each piece rises from below a little after the previous one (soft cascade, same as the home sectors).
function rise(delayMs: number) {
  return { className: "motion-safe:animate-tab-in", style: { animationDelay: `${delayMs}ms` } };
}

// Photo on the left; title, text, service checklist and quote button on the right.
// Remounted on every tab change, so its content replays the cascade.
export function SegmentPanel({ segment, image, cta }: SegmentPanelProps) {
  return (
    <div className="grid items-center gap-10 rounded-[24px] border border-line bg-card p-5 shadow-[0_22px_45px_-32px_rgba(0,0,0,0.35)] sm:p-8 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:p-10">
      <div {...rise(0)}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[18px]">
          <Image src={image} alt={segment.imageAlt} fill unoptimized className="object-cover" />
          <span className="absolute left-4 top-4 rounded-full bg-red px-4 py-1 text-[12px] font-semibold text-white shadow-[0_8px_20px_-8px_var(--glow)]">
            {segment.tab}
          </span>
        </div>
      </div>

      <div>
        <h3 {...rise(140)} className="font-display text-[24px] font-semibold leading-snug text-fg motion-safe:animate-tab-in sm:text-[28px]">
          {segment.title}
        </h3>
        <p {...rise(280)} className="mt-4 max-w-[520px] text-[16px] leading-relaxed text-muted motion-safe:animate-tab-in">
          {segment.text}
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {segment.services.map((service, i) => (
            <li
              key={service}
              {...rise(420 + i * 120)}
              className="flex items-center gap-2.5 text-[15px] text-fg/85 motion-safe:animate-tab-in"
            >
              <CheckCircleIcon className="size-[18px] shrink-0 text-red" />
              {service}
            </li>
          ))}
        </ul>
        <div {...rise(420 + segment.services.length * 120)}>
          <Link
            href="/contactos"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-[14px] font-semibold text-bg transition hover:bg-red hover:text-white"
          >
            {cta}
            <span className="sr-only">: {segment.tab}</span>
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
