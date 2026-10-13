import { PartnerLogos } from "@/components/sections/why-us/PartnerLogos";
import { getContent } from "@/lib/preferences";

// "Parceiros que confiam nos nossos serviços": the shared partner marquee, then a row of
// service results (projects, satisfaction, support, partners) in white cards.
export async function ServicesPartners() {
  const { services, whyUs } = await getContent();
  const { partners } = services;

  return (
    <section id="parceiros" data-theme="light" aria-labelledby="parceiros-servicos-titulo" className="bg-bg py-20 text-fg lg:py-28">
      <div className="container-site">
        <PartnerLogos
          headingId="parceiros-servicos-titulo"
          title={partners.title}
          subtitle={partners.subtitle}
          pauseLabel={whyUs.pausePartners}
          playLabel={whyUs.playPartners}
        />

        <dl className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {partners.stats.map(({ value, label }) => (
            <div
              key={label}
              className="group flex flex-col-reverse rounded-[20px] border border-line bg-card px-6 py-8 text-center shadow-[0_18px_40px_-32px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1 hover:border-red/40"
            >
              <dt className="mt-2 text-[14px] text-muted">{label}</dt>
              <dd className="font-display text-[36px] font-semibold leading-none text-fg transition-colors group-hover:text-red sm:text-[44px]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
