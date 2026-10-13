import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, LeafIcon } from "@/components/icons";
import { aboutPhotos } from "@/config/about";
import { getContent } from "@/lib/preferences";

// "A nossa equipa": team photo on the left, dark panel with title, text and a white button on the right.
export async function TeamBanner() {
  const { about } = await getContent();
  const { team } = about;

  return (
    <section id="equipa" data-theme="light" aria-labelledby="equipa-titulo" className="bg-bg pb-24 pt-24 text-fg lg:pb-28">
      <div className="container-site">
        <article className="grid overflow-hidden rounded-[28px] lg:grid-cols-[0.8fr_1fr]">
          <div className="relative min-h-[300px] lg:min-h-[400px]">
            <Image src={aboutPhotos.team} alt={team.imageAlt} fill unoptimized className="object-cover" />
          </div>

          <div className="relative flex flex-col justify-center bg-[#141416] px-7 py-12 text-white sm:px-10 lg:px-12">
            <span aria-hidden="true" className="h-1 w-10 rounded-full bg-red" />
            <h2 id="equipa-titulo" className="mt-6 font-display text-[32px] font-semibold leading-tight sm:text-[38px]">
              {team.title}
            </h2>
            <p className="mt-6 max-w-[470px] text-[16px] leading-[1.6] text-white/85">{team.text}</p>
            <Link
              href={team.cta.href}
              className="group mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-[16px] font-semibold text-[#141416] transition hover:bg-red hover:text-white"
            >
              {team.cta.label}
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <LeafIcon className="absolute right-[10%] top-1/2 hidden size-20 -translate-y-1/2 text-white/[0.06] md:block" />
          </div>
        </article>
      </div>
    </section>
  );
}
