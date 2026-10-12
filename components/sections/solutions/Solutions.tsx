import { ArrowRightIcon, BuildingIcon, CheckCircleIcon, HandHeartIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutionPhotos } from "@/config/photos";
import { getContent } from "@/lib/preferences";
import { PhotoCard } from "./PhotoCard";

const cardIcons = [BuildingIcon, HandHeartIcon];

// Bento grid: big "Institutional" card on the left, two stacked cards on the right.
export async function Solutions() {
  const { solutions } = await getContent();
  const { featured } = solutions;

  return (
    <section id="solucoes" data-theme="light" aria-labelledby="solucoes-titulo" className="bg-bg pb-16 pt-20 text-fg lg:pb-20 lg:pt-28">
      <div className="container-site">
        <SectionHeading id="solucoes-titulo" title={solutions.title} subtitle={solutions.subtitle} compact />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:grid-rows-2">
          <PhotoCard
            image={solutionPhotos.featured}
            icon={<BuildingIcon className="size-5" />}
            title={featured.title}
            className="min-h-[460px] lg:row-span-2 lg:min-h-[560px]"
          >
            <p className="mt-2 max-w-[540px] text-[14px] leading-relaxed text-white/80 sm:text-[15px]">{featured.text}</p>
            <ul className="mt-5 grid max-w-[540px] gap-x-10 gap-y-2.5 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[14px] font-medium">
                  <CheckCircleIcon className="size-[18px] shrink-0 text-red" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={featured.cta.href}
              className="mt-6 inline-flex w-fit items-center rounded-full border border-white/60 px-6 py-2.5 text-[14px] font-medium transition hover:border-white hover:bg-white hover:text-[#141416]"
            >
              {featured.cta.label}
            </a>
          </PhotoCard>

          {solutions.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? BuildingIcon;
            return (
              <PhotoCard
                key={card.title}
                image={solutionPhotos.cards[i]}
                icon={<Icon className="size-5" />}
                title={card.title}
                className="min-h-[270px]"
              >
                <p className="mt-2 line-clamp-2 max-w-[380px] text-[14px] leading-relaxed text-white/80">{card.text}</p>
                <a href="#contactos" className="mt-4 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold">
                  {solutions.more}
                  <span className="sr-only">: {card.title}</span>
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </PhotoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
