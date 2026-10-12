import { BrowserFrame } from "@/components/device/BrowserFrame";
import { Laptop, laptopScreen } from "@/components/device/Laptop";
import { CodeCube } from "@/components/scene/CodeCube";
import { PhotoCard } from "@/components/scene/PhotoCard";
import { ScreenCarousel } from "@/components/ui/screen-carousel/ScreenCarousel";
import type { Content } from "@/config/content";
import { heroPerson, screenPhotos } from "@/config/photos";
import { HeroVisual } from "../HeroVisual";

// Banner 2 (light): professional on a 3D photo card + 3D laptop flipping through 5 web banners.
export function LaptopScene({ t }: { t: Content }) {
  return (
    <HeroVisual label={t.a11y.scenes.web}>
      <div className="absolute left-[20px] top-[30px] transform-3d motion-safe:animate-float [animation-delay:-2s]">
        <PhotoCard
          src={heroPerson}
          width={250}
          height={312}
          style={{ transform: "rotateY(18deg) rotateZ(-3deg) translateZ(-80px)" }}
        />
      </div>

      <div className="absolute left-[250px] top-[270px] transform-3d motion-safe:animate-float">
        <Laptop style={{ transform: "rotateX(58deg) rotateZ(-26deg)" }}>
          <BrowserFrame url="radical.dev">
            <ScreenCarousel
              images={screenPhotos.web}
              captions={t.screens.web}
              effect="flip"
              width={laptopScreen.width}
            />
          </BrowserFrame>
        </Laptop>
      </div>

      <CodeCube position={{ left: 560, top: 70 }} />
    </HeroVisual>
  );
}
