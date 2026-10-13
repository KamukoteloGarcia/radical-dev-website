import { EyeIcon, GemIcon, TargetIcon } from "@/components/icons";
import type { PillarIcon } from "@/config/content/about/pt";
import { getContent } from "@/lib/preferences";

const icons = {
  target: TargetIcon,
  eye: EyeIcon,
  gem: GemIcon,
} satisfies Record<PillarIcon, unknown>;

// Mission / vision / values: three white cards with a round icon, title and short text.
export async function AboutPillars() {
  const { about } = await getContent();

  return (
    <section data-theme="light" aria-label={about.pillars.map((pillar) => pillar.title).join(", ")} className="bg-bg pt-10 text-fg">
      <ul className="container-site grid gap-5 md:grid-cols-3">
        {about.pillars.map(({ icon, title, text }) => {
          const Icon = icons[icon];
          return (
            <li
              key={title}
              className="rounded-[6px_6px_28px_6px] border border-fg/10 bg-card px-8 pb-7 pt-6 shadow-[0_10px_20px_-18px_rgba(0,0,0,0.35)]"
            >
              <span className="grid size-14 place-items-center rounded-full bg-red/10 text-fg">
                <Icon className="size-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-4 font-display text-[16px] font-semibold">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-muted">{text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
