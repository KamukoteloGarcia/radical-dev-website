import Image from "next/image";
import { ArrowRightIcon, BoltIcon, BuildingIcon, CheckCircleIcon, GemIcon, GridIcon } from "@/components/icons";
import { StatBadge } from "@/components/ui/StatBadge";
import type { Content } from "@/config/content";
import type { SectorId } from "@/config/content/pt";
import { cn } from "@/lib/cn";

const icons = {
  banking: BuildingIcon,
  energy: BoltIcon,
  public: BuildingIcon,
  mining: GemIcon,
  other: GridIcon,
} satisfies Record<SectorId, unknown>;

// Each piece rises from below a little after the previous one (soft cascade).
function rise(delayMs: number, className?: string) {
  return {
    className: cn("motion-safe:animate-tab-in", className),
    style: { animationDelay: `${delayMs}ms` },
  };
}

type SectorPanelProps = {
  sector: Content["sectors"]["items"][number];
  image: string;
  explore: string;
};

// Sector card: text + checklist on the left, photo with a stats badge on the right.
// Remounted on every tab change, so its content replays the cascade.
export function SectorPanel({ sector, image, explore }: SectorPanelProps) {
  const Icon = icons[sector.id];
  const afterPoints = 480 + sector.points.length * 150;

  return (
    <div className="grid items-center gap-10 rounded-[20px] border border-line bg-card p-6 shadow-[0_22px_45px_-32px_rgba(0,0,0,0.35)] sm:p-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:p-10">
      <div>
        <div {...rise(0)}>
          <Icon className="size-9 text-fg" strokeWidth={1.7} />
        </div>
        <h3 {...rise(160, "mt-4 font-display text-[22px] font-semibold leading-snug text-fg sm:text-[24px]")}>
          {sector.title}
        </h3>
        <p {...rise(320, "mt-3 max-w-[480px] text-[15px] leading-relaxed text-muted")}>{sector.text}</p>
        <ul className="mt-5 space-y-2.5">
          {sector.points.map((point, i) => (
            <li key={point} {...rise(480 + i * 150, "flex items-center gap-2.5 text-[14px] text-fg/85")}>
              <CheckCircleIcon className="size-[18px] shrink-0 text-red" />
              {point}
            </li>
          ))}
        </ul>
        <div {...rise(afterPoints, "mt-7")}>
          <a
            href="#contactos"
            className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-[14px] font-medium text-bg transition hover:bg-red hover:text-white"
          >
            {explore}
            <span className="sr-only">: {sector.tab}</span>
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div {...rise(240, "relative pb-6 pr-2 sm:pr-4")}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[16px]">
          <Image src={image} alt="" fill unoptimized className="object-cover" />
        </div>

        <StatBadge stat={sector.stat} label={sector.statLabel} {...rise(750)} />
      </div>
    </div>
  );
}
