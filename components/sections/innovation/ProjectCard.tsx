import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { ProjectSparks } from "./ProjectSparks";

type ProjectCardProps = {
  name: string;
  tag: string;
  href: string;
  image: string;
  viewLabel: string;
};

// Photo on top; name + category pill and "Ver projecto ↗" below.
// On hover/focus: the card lifts, a red layer slides up over the photo, a light shine sweeps across,
// sparks rise and an arrow button pops in the middle.
export function ProjectCard({ name, tag, href, image, viewLabel }: ProjectCardProps) {
  return (
    <li className="group overflow-hidden rounded-[28px] bg-card shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/5 transition duration-500 ease-out hover:shadow-[0_34px_60px_-28px_rgba(163,17,28,0.45)] focus-within:shadow-[0_34px_60px_-28px_rgba(163,17,28,0.45)] motion-safe:hover:-translate-y-2 motion-safe:focus-within:-translate-y-2">
      <div className="relative isolate aspect-[6/5] overflow-hidden">
        <Image src={image} alt="" fill unoptimized className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

        {/* Red layer sliding up from the bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-y-full bg-[linear-gradient(to_top,rgba(163,17,28,0.85),rgba(227,52,63,0.35)_55%,transparent)] transition-transform duration-500 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0"
        />

        {/* Light shine sweeping across */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-[20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-[900ms] ease-out group-hover:translate-x-[520%] group-focus-within:translate-x-[520%]"
        />

        <ProjectSparks />

        {/* Arrow button popping in */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 scale-50 place-items-center rounded-full bg-white text-red-deep opacity-0 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
        >
          <ArrowUpRightIcon className="size-7" />
        </span>
      </div>

      <div className="relative px-7 pb-8 pt-7 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-[24px] font-semibold leading-tight text-fg transition-colors duration-300 group-hover:text-red sm:text-[28px]">
            {name}
          </h3>
          <span className="shrink-0 rounded-full bg-fg/[0.06] px-4 py-2 text-[13px] text-muted transition-colors duration-300 group-hover:bg-red/10 group-hover:text-red-deep sm:px-5 sm:text-[15px]">
            {tag}
          </span>
        </div>

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 text-[17px] text-fg transition-colors hover:text-red after:absolute after:inset-0 after:rounded-b-[28px] sm:text-[19px]"
        >
          {viewLabel}
          <span className="sr-only">: {name}</span>
          <ArrowUpRightIcon className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        {/* Red line growing under the card body */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100"
        />
      </div>
    </li>
  );
}
