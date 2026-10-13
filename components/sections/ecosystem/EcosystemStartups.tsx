import { ProjectCard } from "@/components/sections/innovation/ProjectCard";
import { scrollRow } from "@/components/ui/scroll-row";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { ecosystemPhotos } from "@/config/ecosystem";
import { cn } from "@/lib/cn";
import { getContent } from "@/lib/preferences";

// "Startups do ecossistema": same cards and hover effects (slide-up, shine, sparks) as the featured projects;
// side-scrolling on phones.
export async function EcosystemStartups() {
  const { ecosystem } = await getContent();
  const { startups } = ecosystem;

  return (
    <section id="startups" data-theme="light" aria-labelledby="startups-titulo" className="bg-bg pb-20 pt-10 text-fg lg:pb-24">
      <div className="container-site">
        <SplitHeading id="startups-titulo" title={startups.title} subtitle={startups.subtitle} link={startups.more} />

        <ul className={cn(scrollRow, "mt-14 md:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-3 lg:gap-11")}>
          {startups.items.map((startup) => (
            <ProjectCard
              key={startup.id}
              name={startup.name}
              tag={startup.tag}
              href={startup.href}
              image={ecosystemPhotos.startups[startup.id]}
              viewLabel={startups.view}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
