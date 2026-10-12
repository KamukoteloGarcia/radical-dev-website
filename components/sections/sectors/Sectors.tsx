import { sectorPhotos } from "@/config/photos";
import { getContent } from "@/lib/preferences";
import { SectorTabs } from "./SectorTabs";

export async function Sectors() {
  const { sectors } = await getContent();

  return (
    <section id="sectores" data-theme="light" aria-labelledby="sectores-titulo" className="bg-bg pb-20 pt-6 text-fg lg:pb-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <h2
          id="sectores-titulo"
          className="flex items-center gap-3 font-display text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-fg"
        >
          {sectors.title}
          <span aria-hidden="true" className="h-8 w-[3px] rounded-full bg-red" />
        </h2>

        <div className="mt-6">
          <SectorTabs items={sectors.items} photos={sectorPhotos} explore={sectors.explore} />
        </div>
      </div>
    </section>
  );
}
