import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProcessTimeline } from "@/components/sections/services/ProcessTimeline";
import { SegmentServices } from "@/components/sections/services/SegmentServices";
import { ServiceGrid } from "@/components/sections/services/ServiceGrid";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServicesPartners } from "@/components/sections/services/ServicesPartners";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { services } = await getContent();
  return { title: services.meta.title, description: services.meta.description };
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesHero />
      <ServiceGrid />
      <ProcessTimeline />
      <SegmentServices />
      <ServicesPartners />
    </SiteShell>
  );
}
