import { VideoHero } from "@/components/sections/video-hero/VideoHero";
import { serviceClipSeconds, serviceClips } from "@/config/services";
import { getContent } from "@/lib/preferences";

// Services banner: development, mobile and infrastructure footage on the 3D video deck.
export async function ServicesHero() {
  const { services } = await getContent();

  return (
    <VideoHero
      id="servicos"
      text={services}
      clips={serviceClips}
      clipSeconds={serviceClipSeconds}
      labels={serviceClips.map((clip) => services.chapters[clip.id])}
    />
  );
}
