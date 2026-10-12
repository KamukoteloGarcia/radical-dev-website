import { Tablet, tabletScreen } from "@/components/device/Tablet";
import { DesignKit } from "@/components/scene/DesignKit";
import { ScreenCarousel } from "@/components/ui/screen-carousel/ScreenCarousel";
import type { Content } from "@/config/content";
import { screenPhotos } from "@/config/photos";
import { HeroVisual } from "../HeroVisual";

// Banner 4: 3D tablet whose 5 design banners fly in from the depth.
export function TabletScene({ t }: { t: Content }) {
  return (
    <HeroVisual label={t.a11y.scenes.design}>
      <div className="absolute left-[110px] top-[150px] transform-3d motion-safe:animate-float">
        <Tablet style={{ transform: "rotateX(38deg) rotateZ(-14deg)" }}>
          <ScreenCarousel
            images={screenPhotos.design}
            captions={t.screens.design}
            effect="depth"
            width={tabletScreen.width}
          />
        </Tablet>
      </div>

      <DesignKit />
    </HeroVisual>
  );
}
