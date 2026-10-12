import { VideoHero } from "@/components/sections/video-hero/VideoHero";
import { clipSeconds, innovationClips } from "@/config/innovation";
import { getContent } from "@/lib/preferences";

// Innovation banner: prototyping, product and cloud footage on the 3D video deck.
export async function InnovationHero() {
  const { innovation } = await getContent();

  return (
    <VideoHero
      id="inovacao"
      text={innovation}
      clips={innovationClips}
      clipSeconds={clipSeconds}
      labels={innovationClips.map((clip) => innovation.chapters[clip.id])}
    />
  );
}
