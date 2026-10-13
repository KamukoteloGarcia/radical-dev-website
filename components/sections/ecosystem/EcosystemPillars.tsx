import { GraduationCapIcon, HandHeartIcon, RocketIcon, UsersOutlineIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EcosystemPillarIcon } from "@/config/content/ecosystem/pt";
import { getContent } from "@/lib/preferences";

const icons = {
  startups: RocketIcon,
  partners: HandHeartIcon,
  academy: GraduationCapIcon,
  community: UsersOutlineIcon,
} satisfies Record<EcosystemPillarIcon, unknown>;

// "O nosso ecossistema": centered title with accent bars and four cards that tilt back in 3D on hover.
export async function EcosystemPillars() {
  const { ecosystem } = await getContent();
  const { pillars } = ecosystem;

  return (
    <section id="pilares" data-theme="light" aria-labelledby="pilares-titulo" className="bg-bg pb-10 pt-20 text-fg lg:pt-28">
      <div className="container-site">
        <SectionHeading id="pilares-titulo" title={pillars.title} subtitle={pillars.subtitle} />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {pillars.items.map(({ icon, title, text }) => {
            const Icon = icons[icon];
            return (
              <li key={title} className="group perspective-[1000px]">
                <article className="h-full rounded-[18px] border border-line bg-card px-7 py-9 text-center shadow-[0_22px_45px_-30px_rgba(0,0,0,0.35)] transition duration-500 ease-out motion-safe:group-hover:[transform:rotateX(5deg)_translateY(-6px)]">
                  <span className="mx-auto grid size-[72px] place-items-center rounded-full bg-red/10 text-red ring-1 ring-red/15 transition-colors duration-300 group-hover:bg-red group-hover:text-white">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="mt-6 font-display text-[21px] font-semibold">{title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-muted">{text}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
