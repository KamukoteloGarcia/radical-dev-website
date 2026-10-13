import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutPillars } from "@/components/sections/about/AboutPillars";
import { LeadershipMessage } from "@/components/sections/about/LeadershipMessage";
import { TeamBanner } from "@/components/sections/about/TeamBanner";
import { getContent } from "@/lib/preferences";

export async function generateMetadata(): Promise<Metadata> {
  const { about } = await getContent();
  return { title: about.meta.title, description: about.meta.description };
}

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutHero />
      <AboutIntro />
      <AboutPillars />
      <LeadershipMessage />
      <TeamBanner />
    </SiteShell>
  );
}
