import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";
import { banners } from "@/config/banners";
import type { Slide } from "@/config/content";
import { cn } from "@/lib/cn";
import { cubeOrigin } from "./cube";

const overlays = {
  dark: "bg-[linear-gradient(90deg,rgba(0,0,0,0.55),transparent_70%)] text-white",
  light: "bg-[linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0.55)_45%,transparent_72%)] text-[#141414]",
};

type BannerSlideProps = {
  slide: Slide;
  index: number;
  total: number;
  offset: number;
  cta: string;
  label: string;
};

// One face of the banner cube. Text lines slide in one after another when it becomes active.
export function BannerSlide({ slide, index, total, offset, cta, label }: BannerSlideProps) {
  const banner = banners[slide.id];
  const isActive = offset === 0;

  function reveal(step: number) {
    return {
      className: cn(
        "transition-[opacity,translate] duration-500 ease-out",
        isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      ),
      style: { transitionDelay: isActive ? `${350 + step * 90}ms` : "0ms" },
    };
  }

  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={label}
      aria-hidden={!isActive}
      className="absolute inset-0 overflow-hidden rounded-[18px] backface-hidden transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-opacity"
      style={{
        transform: `rotateY(${offset * 90}deg)`,
        transformOrigin: cubeOrigin,
        opacity: Math.abs(offset) <= 1 ? 1 : 0,
        zIndex: isActive ? 2 : 1,
      }}
    >
      <Image
        src={banner.image}
        alt=""
        fill
        sizes="208px"
        loading="eager"
        draggable={false}
        className={cn(
          "object-cover transition-[scale] duration-[4000ms] ease-out motion-reduce:transition-none",
          isActive ? "scale-110" : "scale-100",
        )}
      />

      <div className={cn("relative flex h-full flex-col p-3.5", overlays[banner.tone])}>
        <p {...reveal(0)}>
          <span className="rounded-full bg-current/10 px-2 py-0.5 text-[8.5px] tracking-[0.16em]">
            0{index + 1} / 0{total}
          </span>
        </p>
        <p {...reveal(1)}>
          <span className="mt-3 block max-w-[60%] font-display text-[15px] font-semibold leading-[1.15]">
            {slide.title}
          </span>
        </p>
        <p {...reveal(2)}>
          <span className="mt-1 block max-w-[56%] text-[9.5px] leading-snug opacity-80">{slide.text}</span>
        </p>
        <p {...reveal(3)}>
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-red px-2.5 py-1 text-[9px] font-semibold text-white">
            {cta}
            <ArrowRightIcon className="size-2.5" strokeWidth={3} />
          </span>
        </p>
      </div>
    </div>
  );
}
