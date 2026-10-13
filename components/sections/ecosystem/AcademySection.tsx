import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ChartIcon, CodeIcon, PaletteIcon, UsersOutlineIcon } from "@/components/icons";
import { StatBadge } from "@/components/ui/StatBadge";
import type { AcademyFeatureIcon } from "@/config/content/ecosystem/pt";
import { ecosystemPhotos } from "@/config/ecosystem";
import { getContent } from "@/lib/preferences";

const icons = {
  code: CodeIcon,
  design: PaletteIcon,
  data: ChartIcon,
  mentoring: UsersOutlineIcon,
} satisfies Record<AcademyFeatureIcon, unknown>;

// "Academia Radical": photo with a "+300" badge on the left; title, text, 2×2 features and button on the right.
export async function AcademySection() {
  const { ecosystem } = await getContent();
  const { academy } = ecosystem;

  return (
    <section id="academia" data-theme="light" aria-labelledby="academia-titulo" className="bg-bg py-16 text-fg lg:py-24">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_1fr] lg:gap-[8%]">
        <div className="relative pb-8 pr-4 sm:pr-6">
          <div className="relative aspect-square overflow-hidden rounded-[24px]">
            <Image src={ecosystemPhotos.academy} alt={academy.imageAlt} fill unoptimized className="object-cover" />
          </div>
          <StatBadge stat={academy.stat} label={academy.statLabel} size="lg" />
        </div>

        <div>
          <h2 id="academia-titulo" className="font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.25] tracking-[-0.01em]">
            {academy.title}
            <span aria-hidden="true" className="ml-3 inline-block h-[5px] w-12 rounded-full bg-red align-middle" />
          </h2>

          <p className="mt-8 max-w-[640px] text-[17px] leading-[1.85] text-muted sm:text-[19px]">{academy.text}</p>

          <ul className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {academy.features.map(({ icon, label }) => {
              const Icon = icons[icon];
              return (
                <li key={label} className="flex items-center gap-3 text-[17px] text-fg">
                  <Icon className="size-6 shrink-0 text-red" strokeWidth={1.8} />
                  {label}
                </li>
              );
            })}
          </ul>

          <Link
            href={academy.cta.href}
            className="group mt-12 inline-flex items-center gap-2 rounded-full bg-fg px-8 py-4 text-[17px] font-semibold text-bg transition hover:bg-red hover:text-white"
          >
            {academy.cta.label}
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
