import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/lib/preferences";

// "Como trabalhamos": four numbered steps joined by a red line (horizontal from `lg`, vertical on phones).
export async function ProcessTimeline() {
  const { services } = await getContent();
  const { process } = services;

  return (
    <section id="processo" data-theme="light" aria-labelledby="processo-titulo" className="bg-bg py-20 text-fg lg:py-28">
      <div className="container-site">
        <SectionHeading id="processo-titulo" title={process.title} subtitle={process.subtitle} compact />

        <ol className="relative mt-16 grid gap-10 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-[2px] before:bg-[linear-gradient(to_bottom,var(--red),rgb(227_52_63/0.15))] lg:grid-cols-4 lg:gap-8 lg:before:inset-x-[12%] lg:before:bottom-auto lg:before:left-[12%] lg:before:top-[27px] lg:before:h-[2px] lg:before:w-auto lg:before:bg-[linear-gradient(to_right,var(--red),rgb(227_52_63/0.15))]">
          {process.steps.map(({ title, text, duration }, i) => (
            <li key={title} className="group relative flex gap-6 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-[#141416] font-display text-[18px] font-semibold text-white shadow-[0_12px_30px_-10px_var(--glow)] ring-4 ring-bg transition duration-300 group-hover:scale-110 group-hover:bg-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="rounded-[18px] border border-line bg-card p-6 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.4)] transition duration-300 group-hover:border-red/40 lg:mt-6 lg:w-full">
                <span className="inline-block rounded-full bg-red/10 px-3 py-1 text-[12px] font-semibold text-red-deep">{duration}</span>
                <h3 className="mt-3 font-display text-[19px] font-semibold">{title}</h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
