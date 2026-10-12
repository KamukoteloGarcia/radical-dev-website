import type { ReactNode } from "react";
import { heroIntervalMs, heroSlides, type HeroSlideId } from "@/config/hero";
import type { Content } from "@/config/content";
import { getContent } from "@/lib/preferences";
import { HeroCarousel } from "./carousel/HeroCarousel";
import { HeroSlide } from "./HeroSlide";
import { LaptopScene } from "./scenes/LaptopScene";
import { MonitorScene } from "./scenes/MonitorScene";
import { PhoneScene } from "./scenes/PhoneScene";
import { TabletScene } from "./scenes/TabletScene";
import { TeamScene } from "./scenes/TeamScene";

const scenes: Record<HeroSlideId, (props: { t: Content }) => ReactNode> = {
  mobile: PhoneScene,
  web: LaptopScene,
  data: MonitorScene,
  design: TabletScene,
  team: TeamScene,
};

export async function Hero() {
  const t = await getContent();

  return (
    <section id="inicio" className="relative isolate flex-1 overflow-hidden bg-bg">
      <HeroCarousel
        tones={heroSlides.map((slide) => ("tone" in slide ? slide.tone : undefined))}
        intervalMs={heroIntervalMs}
        labels={{ region: t.a11y.hero, ...t.heroControls }}
      >
        {heroSlides.map((slide, i) => {
          const Scene = scenes[slide.id];
          return (
            <HeroSlide
              key={slide.id}
              text={t.hero[slide.id]}
              heading={i === 0 ? "h1" : "h2"}
              tone={"tone" in slide ? slide.tone : undefined}
            >
              <Scene t={t} />
            </HeroSlide>
          );
        })}
      </HeroCarousel>
    </section>
  );
}
