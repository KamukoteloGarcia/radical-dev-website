import { VideoHero } from "@/components/sections/video-hero/VideoHero";
import { aboutClipSeconds, aboutClips } from "@/config/about";
import { getContent } from "@/lib/preferences";

// About banner: vision, talent and Angolan roots footage on the 3D video deck.
export async function AboutHero() {
  const { about } = await getContent();

  return (
    <VideoHero
      id="sobre-nos"
      text={about}
      clips={aboutClips}
      clipSeconds={aboutClipSeconds}
      labels={aboutClips.map((clip) => about.chapters[clip.id])}
    />
  );
}
