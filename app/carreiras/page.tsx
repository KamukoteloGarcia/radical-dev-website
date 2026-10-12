import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { CareersHero } from "@/components/sections/careers/CareersHero";
import { Openings } from "@/components/sections/careers/Openings";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { careers } = await getContent();
  return { title: careers.meta.title, description: careers.meta.description };
}

export default function CareersPage() {
  return (
    <SiteShell>
      <CareersHero />
      <Openings />
    </SiteShell>
  );
}
