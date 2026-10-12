import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/hero/Hero";
import { Quotes } from "@/components/sections/quotes/Quotes";
import { Sectors } from "@/components/sections/sectors/Sectors";
import { Solutions } from "@/components/sections/solutions/Solutions";
import { WhyUs } from "@/components/sections/why-us/WhyUs";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Solutions />
      <Sectors />
      <WhyUs />
      <Quotes />
    </SiteShell>
  );
}
