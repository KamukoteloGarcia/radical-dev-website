import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { AcademySection } from "@/components/sections/ecosystem/AcademySection";
import { EcosystemHero } from "@/components/sections/ecosystem/EcosystemHero";
import { EcosystemPillars } from "@/components/sections/ecosystem/EcosystemPillars";
import { EcosystemStartups } from "@/components/sections/ecosystem/EcosystemStartups";
import { ImpactBand } from "@/components/sections/ecosystem/ImpactBand";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { ecosystem } = await getContent();
  return { title: ecosystem.meta.title, description: ecosystem.meta.description };
}

export default function EcosystemPage() {
  return (
    <SiteShell>
      <EcosystemHero />
      <EcosystemPillars />
      <AcademySection />
      <EcosystemStartups />
      <ImpactBand />
    </SiteShell>
  );
}
