import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import type { CareersContent } from "@/config/content/careers/pt";
import { careerPhotos } from "@/config/careers";

type FeaturedJobProps = { job: CareersContent["featured"] };

// Wide card: photo with a "Vaga em destaque" badge on the left, role, text, tags and apply button on the right.
export function FeaturedJob({ job }: FeaturedJobProps) {
  return (
    <article className="group grid overflow-hidden rounded-[20px] border border-line bg-card md:grid-cols-2">
      <div className="relative min-h-[260px] overflow-hidden md:min-h-[320px]">
        <Image
          src={careerPhotos.featured}
          alt={job.imageAlt}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute right-6 top-6 rounded-full bg-red px-4 py-1 text-[12px] font-medium text-white shadow-[0_8px_20px_-8px_var(--glow)]">
          {job.badge}
        </span>
      </div>

      <div className="flex flex-col justify-center bg-fg/[0.02] px-7 py-10 sm:px-12">
        <span aria-hidden="true" className="h-[3px] w-7 rounded-full bg-red" />
        <h3 className="mt-3 font-display text-[26px] font-semibold leading-tight text-fg sm:text-[30px]">{job.title}</h3>
        <p className="mt-4 max-w-[400px] text-[15px] leading-[1.6] text-muted">{job.text}</p>

        <ul className="mt-5 flex flex-wrap gap-2.5">
          {job.tags.map((tag) => (
            <li key={tag} className="rounded-full bg-red/10 px-3.5 py-1 text-[13px] text-red-deep">
              {tag}
            </li>
          ))}
        </ul>

        <Link
          href={job.cta.href}
          className="group/cta mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-6 py-3 text-[14px] font-semibold text-bg transition hover:bg-red hover:text-white"
        >
          {job.cta.label}
          <span className="sr-only">: {job.title}</span>
          <ArrowRightIcon className="size-4 transition-transform group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
