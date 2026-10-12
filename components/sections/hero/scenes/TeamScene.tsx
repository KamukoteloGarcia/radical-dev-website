import { TeamRing } from "@/components/scene/TeamRing";
import type { Content } from "@/config/content";
import { screenPhotos } from "@/config/photos";
import { HeroVisual } from "../HeroVisual";

// Banner 5: the team on a 3D ring, one person at a time.
export function TeamScene({ t }: { t: Content }) {
  return (
    <HeroVisual label={t.a11y.scenes.team}>
      <TeamRing photos={screenPhotos.team} roles={t.screens.team} />
    </HeroVisual>
  );
}
