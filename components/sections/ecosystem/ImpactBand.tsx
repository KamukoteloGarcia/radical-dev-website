import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { getContent } from "@/lib/preferences";

const gridStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "46px 46px",
  transform: "perspective(600px) rotateX(62deg)",
};

// Dark impact card: title, text and button on the left; four big numbers on the right,
// over a perspective grid floor and a red glow (same style as the footer CTA).
export async function ImpactBand() {
  const { ecosystem } = await getContent();
  const { impact } = ecosystem;

  return (
    <section id="impacto" data-theme="light" aria-labelledby="impacto-titulo" className="bg-bg pb-6 pt-6 text-fg">
      <div className="container-site">
        <article className="relative isolate grid gap-12 overflow-hidden rounded-[28px] bg-[#141416] px-7 py-12 text-white sm:px-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16 lg:px-16 lg:py-16">
          <div aria-hidden="true" className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_top,#000,transparent_70%)]">
            <div className="absolute inset-x-[-25%] bottom-0 h-[160%] origin-bottom" style={gridStyle} />
          </div>
          <span aria-hidden="true" className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_70%)]" />

          <div>
            <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-red">
              <span aria-hidden="true" className="h-[2px] w-10 rounded-full bg-red" />
              {impact.eyebrow}
            </p>
            <h2 id="impacto-titulo" className="mt-5 font-display text-[32px] font-semibold leading-tight sm:text-[40px]">
              {impact.title}
            </h2>
            <p className="mt-5 max-w-[460px] text-[16px] leading-[1.65] text-white/80">{impact.text}</p>
            <Link
              href={impact.cta.href}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[16px] font-semibold text-[#141416] transition hover:bg-red hover:text-white"
            >
              {impact.cta.label}
              <ArrowRightIcon className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-4 sm:gap-5">
            {impact.stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col-reverse rounded-[20px] border border-white/10 bg-white/[0.04] px-6 py-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red/50"
              >
                <dt className="mt-2 text-[14px] text-white/70">{label}</dt>
                <dd className="font-display text-[40px] font-semibold leading-none text-white sm:text-[48px]">
                  <span className="text-red">{value.startsWith("+") ? "+" : ""}</span>
                  {value.replace(/^\+/, "")}
                </dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
