import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { scrollRow } from "@/components/ui/scroll-row";
import { careerPhotos } from "@/config/careers";
import { cn } from "@/lib/cn";
import { getContent, getLanguage } from "@/lib/preferences";
import { FeaturedJob } from "./FeaturedJob";
import { OpeningCard } from "./OpeningCard";

// Featured job card, then "Vagas disponíveis" with one card per department.
export async function Openings() {
  const [{ careers }, language] = await Promise.all([getContent(), getLanguage()]);
  const { openings } = careers;
  const plural = new Intl.PluralRules(language);
  const countLabel = (n: number) =>
    openings.count[plural.select(n) === "one" ? "one" : "other"].replace("{n}", String(n));

  return (
    <section id="vagas" data-theme="light" aria-labelledby="vagas-titulo" className="bg-bg py-20 text-fg lg:py-24">
      <div className="container-site">
        <FeaturedJob job={careers.featured} />

        <div className="mt-24 flex items-end justify-between gap-6">
          <div>
            <h2 id="vagas-titulo" className="font-display text-[clamp(1.75rem,2.8vw,2.25rem)] font-semibold leading-tight">
              {openings.title}
            </h2>
            <span aria-hidden="true" className="mt-3 block h-[3px] w-8 rounded-full bg-red" />
          </div>

          <Link
            href={openings.all.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] text-fg transition-colors hover:text-red"
          >
            {openings.all.label}
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ul className={cn(scrollRow, "mt-12 md:grid-cols-2 md:gap-7 lg:grid-cols-3")}>
          {openings.items.map((item) => (
            <OpeningCard
              key={item.id}
              title={item.title}
              countLabel={countLabel(item.count)}
              href={item.href}
              image={careerPhotos[item.id]}
              detailsLabel={openings.details}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
