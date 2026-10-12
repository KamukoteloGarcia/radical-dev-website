import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/lib/preferences";
import { PartnerLogos } from "./PartnerLogos";
import { ReasonCard } from "./ReasonCard";

export async function WhyUs() {
  const { whyUs } = await getContent();

  return (
    <section id="sobre" data-theme="light" aria-labelledby="sobre-titulo" className="border-t border-line bg-bg pb-20 pt-20 text-fg lg:pb-24 lg:pt-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <SectionHeading id="sobre-titulo" title={whyUs.title} subtitle={whyUs.subtitle} />

        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-12">
          {whyUs.reasons.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </ul>

        <PartnerLogos label={whyUs.partners} pauseLabel={whyUs.pausePartners} playLabel={whyUs.playPartners} />
      </div>
    </section>
  );
}
