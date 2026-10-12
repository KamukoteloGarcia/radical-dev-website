import { SectionHeading } from "@/components/ui/SectionHeading";
import { getContent } from "@/lib/preferences";
import { SolutionCard } from "./SolutionCard";

export async function Solutions() {
  const { solutions } = await getContent();

  return (
    <section id="solucoes" data-theme="light" aria-labelledby="solucoes-titulo" className="bg-bg py-20 text-fg lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <SectionHeading id="solucoes-titulo" title={solutions.title} subtitle={solutions.subtitle} />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {solutions.items.map((item, i) => (
            <SolutionCard key={item.title} {...item} index={i} more={solutions.more} />
          ))}
        </ul>
      </div>
    </section>
  );
}
