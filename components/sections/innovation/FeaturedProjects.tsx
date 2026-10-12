import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { projectPhotos } from "@/config/photos";
import { getContent } from "@/lib/preferences";
import { ProjectCard } from "./ProjectCard";

// "Projectos em Destaque": title with accent bar + "Ver mais" link, then three project cards.
export async function FeaturedProjects() {
  const { innovation } = await getContent();
  const { projects } = innovation;

  return (
    <section id="projectos" data-theme="light" aria-labelledby="projectos-titulo" className="bg-bg pb-24 pt-10 text-fg lg:pb-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[72px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="projectos-titulo"
              className="flex items-center gap-5 font-display text-[clamp(2rem,3.4vw,3rem)] font-semibold leading-tight tracking-[-0.01em]"
            >
              {projects.title}
              <span aria-hidden="true" className="h-[0.9em] w-[5px] shrink-0 rounded-full bg-red" />
            </h2>
            <p className="mt-2 text-[17px] text-muted sm:text-[22px]">{projects.subtitle}</p>
          </div>

          <Link
            href={projects.more.href}
            className="group inline-flex shrink-0 items-center gap-2 text-[17px] text-fg transition-colors hover:text-red sm:text-[20px]"
          >
            {projects.more.label}
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-11">
          {projects.items.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              tag={project.tag}
              href={project.href}
              image={projectPhotos[project.id]}
              viewLabel={projects.view}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
