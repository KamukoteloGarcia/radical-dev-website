import { scrollRow } from "@/components/ui/scroll-row";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { projectPhotos } from "@/config/photos";
import { cn } from "@/lib/cn";
import { getContent } from "@/lib/preferences";
import { ProjectCard } from "./ProjectCard";

// "Projectos em Destaque": title with accent bar + "Ver mais" link, then three project cards.
export async function FeaturedProjects() {
  const { innovation } = await getContent();
  const { projects } = innovation;

  return (
    <section id="projectos" data-theme="light" aria-labelledby="projectos-titulo" className="bg-bg pb-24 pt-10 text-fg lg:pb-28">
      <div className="container-site">
        <SplitHeading id="projectos-titulo" title={projects.title} subtitle={projects.subtitle} link={projects.more} />

        <ul className={cn(scrollRow, "mt-14 md:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-11")}>
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
