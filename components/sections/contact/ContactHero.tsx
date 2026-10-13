import { HeroBackground } from "@/components/sections/hero/HeroBackground";
import { HeroText } from "@/components/sections/video-hero/HeroText";
import { VideoScreen } from "@/components/ui/video-showcase/VideoScreen";
import { contactVideo } from "@/config/contact";
import { getContent } from "@/lib/preferences";

// Contact banner without slides: text on the left, one looping video on a 3D glass screen on the right.
export async function ContactHero() {
  const { contactPage } = await getContent();

  return (
    <section
      id="contactos-topo"
      aria-labelledby="contactos-titulo"
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-bg lg:min-h-[calc(100svh-126px)]"
    >
      <HeroBackground />

      <div className="container-site grid items-center gap-14 py-16 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-8 lg:py-20">
        <div>
          <HeroText headingId="contactos-titulo" text={contactPage.hero} />
        </div>
        <VideoScreen video={contactVideo.video} poster={contactVideo.poster} />
      </div>
    </section>
  );
}
