import { Monitor, monitorScreen } from "@/components/device/Monitor";
import { BarChart3d } from "@/components/scene/BarChart3d";
import { StatsPanel } from "@/components/scene/StatsPanel";
import { ScreenCarousel } from "@/components/ui/screen-carousel/ScreenCarousel";
import type { Content } from "@/config/content";
import { screenPhotos } from "@/config/photos";
import { HeroVisual } from "../HeroVisual";

// Banner 3: 3D monitor turning 5 data banners like a cube, with a 3D bar chart.
export function MonitorScene({ t }: { t: Content }) {
  return (
    <HeroVisual label={t.a11y.scenes.data}>
      <div className="absolute left-[120px] top-[60px] transform-3d motion-safe:animate-float">
        <Monitor style={{ transform: "rotateY(-22deg) rotateX(4deg)" }}>
          <ScreenCarousel
            images={screenPhotos.data}
            captions={t.screens.data}
            effect="cube"
            width={monitorScreen.width}
          />
        </Monitor>
      </div>

      <StatsPanel labels={t.stats} position={{ left: 480, top: 340 }} />
      <BarChart3d position={{ left: 20, top: 420 }} />
    </HeroVisual>
  );
}
