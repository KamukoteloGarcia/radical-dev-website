import { getContent } from "@/lib/preferences";
import { AppHeader } from "./AppHeader";
import { BannerSlider } from "./banner/BannerSlider";
import { BottomNav } from "./BottomNav";
import { ProjectCard } from "./ProjectCard";
import { StatusBar } from "./StatusBar";
import { TeamRow } from "./TeamRow";

// Mock Radical dev app shown on the phone screen.
export async function AppScreen() {
  const { app, slides, a11y } = await getContent();

  return (
    <div className="flex size-full select-none flex-col overflow-hidden bg-[radial-gradient(120%_60%_at_100%_0%,#3a0b12,transparent_60%)] font-sans text-white">
      <StatusBar />
      <AppHeader welcome={app.welcome} />
      <BannerSlider
        slides={slides}
        cta={app.learnMore}
        labels={{ region: a11y.slides, slide: a11y.slide, of: a11y.of }}
      />
      <TeamRow title={app.team} seeAll={app.seeAll} />
      <ProjectCard title={app.projects} project={app.project} />
      <BottomNav />
    </div>
  );
}
