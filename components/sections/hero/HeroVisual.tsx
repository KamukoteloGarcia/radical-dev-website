import { AppScreen } from "@/components/device/app-screen/AppScreen";
import { Phone } from "@/components/device/Phone";
import { CodeCube } from "@/components/scene/CodeCube";
import { GlowRing } from "@/components/scene/GlowRing";
import { Pedestal } from "@/components/scene/Pedestal";
import { SettingsCard } from "@/components/scene/SettingsCard";
import { Stage } from "@/components/scene/Stage";
import { StatsPanel } from "@/components/scene/StatsPanel";
import { getContent } from "@/lib/preferences";

// The scene is drawn on a fixed 680×620 canvas and scaled per breakpoint.
export async function HeroVisual() {
  const { stats, a11y } = await getContent();

  return (
    <div
      role="group"
      aria-label={a11y.scene}
      className="relative h-[298px] w-full shrink-0 motion-safe:animate-rise [animation-delay:200ms] min-[400px]:h-[335px] sm:h-[465px] lg:h-[446px] lg:w-[490px] xl:h-[589px] xl:w-[646px] 2xl:h-[620px] 2xl:w-[680px]"
    >
      <div className="absolute left-1/2 top-0 h-[620px] w-[680px] origin-top -translate-x-1/2 scale-48 min-[400px]:scale-54 sm:scale-75 lg:scale-72 xl:scale-95 2xl:scale-100">
        <Stage>
          <StatsPanel labels={stats} />
          <SettingsCard />
          <GlowRing />
          <Phone>
            <AppScreen />
          </Phone>
          <CodeCube />
          <Pedestal />
        </Stage>
      </div>
    </div>
  );
}
