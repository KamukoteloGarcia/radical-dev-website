import Link from "next/link";
import { ArrowUpRightIcon, ChartIcon, CloudIcon, LockIcon, MonitorIcon, PaletteIcon, SmartphoneIcon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceIcon } from "@/config/content/services/pt";
import { getContent } from "@/lib/preferences";

const icons = {
  web: MonitorIcon,
  mobile: SmartphoneIcon,
  data: ChartIcon,
  design: PaletteIcon,
  cloud: CloudIcon,
  security: LockIcon,
} satisfies Record<ServiceIcon, unknown>;

// "O que fazemos": six numbered service cards. On hover a dark layer rises from the bottom,
// the icon tile turns red and the arrow slides out.
export async function ServiceGrid() {
  const { services } = await getContent();
  const { offer } = services;

  return (
    <section id="o-que-fazemos" data-theme="light" aria-labelledby="o-que-fazemos-titulo" className="bg-bg pb-10 pt-20 text-fg lg:pt-28">
      <div className="container-site">
        <SectionHeading id="o-que-fazemos-titulo" title={offer.title} subtitle={offer.subtitle} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {offer.items.map(({ icon, title, text }, i) => {
            const Icon = icons[icon];
            return (
              <li key={title} className="group relative isolate overflow-hidden rounded-[22px] border border-line bg-card p-8 shadow-[0_22px_45px_-34px_rgba(0,0,0,0.4)] transition duration-500 hover:shadow-[0_30px_60px_-30px_rgba(163,17,28,0.45)] motion-safe:hover:-translate-y-1.5">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 translate-y-full bg-[linear-gradient(160deg,#1c1c20,#0b0b0d)] transition-transform duration-500 ease-out group-hover:translate-y-0"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 -z-10 size-40 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-red/10 text-red transition-colors duration-300 group-hover:bg-red group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <span className="font-display text-[44px] font-semibold leading-none text-fg/[0.07] transition-colors duration-500 group-hover:text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-[21px] font-semibold transition-colors duration-500 group-hover:text-white">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted transition-colors duration-500 group-hover:text-white/75">{text}</p>

                <Link
                  href="/contactos"
                  className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-fg transition-colors duration-500 after:absolute after:inset-0 group-hover:text-red"
                >
                  {offer.more}
                  <span className="sr-only">: {title}</span>
                  <ArrowUpRightIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
