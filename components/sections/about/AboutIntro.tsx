import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, BuildingIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBadge } from "@/components/ui/StatBadge";
import { aboutPhotos } from "@/config/about";
import { getContent } from "@/lib/preferences";

// "Conheça a Radical dev": centered title with accent bars, then a white card with the story
// on the left and the office photo with a "+40" badge on the right.
export async function AboutIntro() {
  const { about } = await getContent();
  const { intro } = about;

  return (
    <section id="historia" data-theme="light" aria-labelledby="historia-titulo" className="bg-bg pt-20 text-fg lg:pt-24">
      <div className="container-site">
        <SectionHeading id="historia-titulo" title={intro.title} subtitle={intro.subtitle} />

        <article className="mt-14 grid items-center gap-14 rounded-[28px] bg-card px-6 py-10 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.35)] sm:px-10 lg:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-14 lg:py-14">
          <div>
            <BuildingIcon className="size-12 text-fg" strokeWidth={1.6} />
            <h3 className="mt-5 font-display text-[24px] font-semibold leading-snug sm:text-[28px]">{intro.name}</h3>
            <p className="mt-8 max-w-[540px] text-[16px] leading-[1.75] text-muted sm:text-[17px]">{intro.text}</p>
            <Link
              href={intro.cta.href}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-7 py-3.5 text-[16px] font-semibold text-bg transition hover:bg-red hover:text-white"
            >
              {intro.cta.label}
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative pb-8 pr-4 sm:pr-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
              <Image src={aboutPhotos.office} alt={intro.imageAlt} fill unoptimized className="object-cover" />
            </div>
            <StatBadge stat={intro.stat} label={intro.statLabel} size="lg" />
          </div>
        </article>
      </div>
    </section>
  );
}
