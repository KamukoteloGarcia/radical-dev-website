import { SectionHeading } from "@/components/ui/SectionHeading";
import { segmentPhotos } from "@/config/services";
import { getContent } from "@/lib/preferences";
import { SegmentTabs } from "./SegmentTabs";

// "Soluções para cada segmento": tabs per client segment, each with its own photo and services.
export async function SegmentServices() {
  const { services } = await getContent();

  return (
    <section id="segmentos" data-theme="light" aria-labelledby="segmentos-titulo" className="border-y border-line bg-bg py-20 text-fg lg:py-28">
      <div className="container-site">
        <SectionHeading id="segmentos-titulo" title={services.segments.title} subtitle={services.segments.subtitle} />
        <div className="mt-12">
          <SegmentTabs segments={services.segments} photos={segmentPhotos} />
        </div>
      </div>
    </section>
  );
}
