import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative isolate flex-1 overflow-hidden bg-hero text-fg">
      <HeroBackground />
      <div className="flex min-h-[calc(100svh-160px)] flex-col gap-10 px-4 py-14 sm:px-[58px] lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-[90px] lg:pr-[60px]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
