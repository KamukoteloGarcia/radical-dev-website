import { VideoHero } from "@/components/sections/video-hero/VideoHero";
import { ecosystemClipSeconds, ecosystemClips } from "@/config/ecosystem";
import { getContent } from "@/lib/preferences";

// Ecosystem banner: startups, partners and community footage on the 3D video deck.
export async function EcosystemHero() {
  const { ecosystem } = await getContent();

  return (
    <VideoHero
      id="ecossistema"
      text={ecosystem}
      clips={ecosystemClips}
      clipSeconds={ecosystemClipSeconds}
      labels={ecosystemClips.map((clip) => ecosystem.chapters[clip.id])}
    />
  );
}
