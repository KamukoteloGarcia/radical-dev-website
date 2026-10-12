import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { innovationPhotos } from "@/config/photos";
import { getContent } from "@/lib/preferences";
import { LabFeatures } from "./LabFeatures";

// "Onde as ideias ganham forma.": photo on the left; title, text, features and button on the right.
export async function InnovationLab() {
  const { innovation } = await getContent();
  const { lab } = innovation;

  return (
    <section id="laboratorio" data-theme="light" aria-labelledby="laboratorio-titulo" className="bg-bg py-16 text-fg lg:py-24">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_1fr] lg:gap-[8%]">
        <div className="relative aspect-square overflow-hidden rounded-[24px]">
          <Image src={innovationPhotos.lab} alt={lab.imageAlt} fill unoptimized className="object-cover" />
        </div>

        <div>
          <h2
            id="laboratorio-titulo"
            className="max-w-[560px] font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-[1.25] tracking-[-0.01em]"
          >
            {lab.title}
            <span aria-hidden="true" className="ml-3 inline-block h-[5px] w-12 rounded-full bg-red align-middle" />
          </h2>

          <p className="mt-14 max-w-[690px] text-[17px] leading-[1.85] text-muted sm:text-[20px]">{lab.text}</p>

          <LabFeatures features={lab.features} />

          <Link
            href={lab.cta.href}
            className="group mt-14 inline-flex items-center gap-2 rounded-full bg-fg px-8 py-4 text-[17px] font-semibold text-bg transition hover:bg-red hover:text-white"
          >
            {lab.cta.label}
            <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
