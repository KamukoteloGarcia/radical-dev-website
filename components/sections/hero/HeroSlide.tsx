import type { ReactNode } from "react";
import type { HeroText } from "@/config/content/pt";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

type HeroSlideProps = {
  text: HeroText;
  heading: "h1" | "h2";
  tone?: "light";
  /** The 3D scene on the right. */
  children: ReactNode;
};

// One full-width hero banner: text on the left, 3D scene on the right.
export function HeroSlide({ text, heading, tone, children }: HeroSlideProps) {
  return (
    <div data-theme={tone} className="relative isolate h-full bg-bg text-fg">
      <HeroBackground />
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 pb-6 pt-12 sm:px-8 lg:min-h-[calc(100svh-126px)] lg:flex-row lg:justify-between lg:gap-6 lg:px-10 lg:pb-24 lg:pt-10">
        <HeroContent text={text} heading={heading} />
        {children}
      </div>
    </div>
  );
}
