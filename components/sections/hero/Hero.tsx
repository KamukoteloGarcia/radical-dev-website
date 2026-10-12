import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex-1 overflow-hidden bg-bg">
      <HeroBackground />
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-126px)] lg:flex-row lg:justify-between lg:gap-6 lg:px-10 lg:py-10">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
