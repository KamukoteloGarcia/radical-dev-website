import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { InnovationHero } from "@/components/sections/innovation/InnovationHero";
import { InnovationLab } from "@/components/sections/innovation/InnovationLab";
import { FeaturedProjects } from "@/components/sections/innovation/FeaturedProjects";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { innovation } = await getContent();
  return { title: innovation.meta.title, description: innovation.meta.description };
}

export default function InnovationPage() {
  return (
    <SiteShell>
      <InnovationHero />
      <InnovationLab />
      <FeaturedProjects />
    </SiteShell>
  );
}
