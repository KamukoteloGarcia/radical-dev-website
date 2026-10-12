import { AppScreen } from "@/components/device/app-screen/AppScreen";
import { Phone } from "@/components/device/Phone";
import { CodeCube } from "@/components/scene/CodeCube";
import { GlowRing } from "@/components/scene/GlowRing";
import { Pedestal } from "@/components/scene/Pedestal";
import { SettingsCard } from "@/components/scene/SettingsCard";
import { StatsPanel } from "@/components/scene/StatsPanel";
import type { Content } from "@/config/content";
import { HeroVisual } from "../HeroVisual";

// Banner 1: rotating phone with the app and its own 5 banners.
export function PhoneScene({ t }: { t: Content }) {
  return (
    <HeroVisual label={t.a11y.scenes.mobile}>
      <StatsPanel labels={t.stats} />
      <SettingsCard />
      <GlowRing />
      <Phone>
        <AppScreen />
      </Phone>
      <CodeCube />
      <Pedestal />
    </HeroVisual>
  );
}
