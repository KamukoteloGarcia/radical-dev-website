import { VideoHero } from "@/components/sections/video-hero/VideoHero";
import { careerClips, careerClipSeconds } from "@/config/careers";
import { getContent } from "@/lib/preferences";

// Careers banner: interview, team and growth footage on the 3D video deck.
export async function CareersHero() {
  const { careers } = await getContent();

  return (
    <VideoHero
      id="carreiras"
      text={careers}
      clips={careerClips}
      clipSeconds={careerClipSeconds}
      labels={careerClips.map((clip) => careers.chapters[clip.id])}
    />
  );
}
