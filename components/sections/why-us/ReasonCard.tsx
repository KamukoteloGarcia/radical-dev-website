import { ChartIcon, GlobeIcon, ShieldCheckIcon } from "@/components/icons";
import type { ReasonIcon } from "@/config/content/pt";

const icons = {
  shield: ShieldCheckIcon,
  chart: ChartIcon,
  globe: GlobeIcon,
} satisfies Record<ReasonIcon, unknown>;

type ReasonCardProps = { icon: ReasonIcon; title: string; text: string };

export function ReasonCard({ icon, title, text }: ReasonCardProps) {
  const Icon = icons[icon];

  return (
    <li className="group perspective-[1000px]">
      <article className="h-full rounded-[18px] border border-line bg-card px-8 py-9 text-center shadow-[0_22px_45px_-30px_rgba(0,0,0,0.35)] transition duration-500 ease-out motion-safe:group-hover:[transform:rotateX(5deg)_translateY(-6px)]">
        <span className="mx-auto grid size-[72px] place-items-center rounded-full bg-red/10 text-red ring-1 ring-red/15 transition-colors duration-300 group-hover:bg-red group-hover:text-white">
          <Icon className="size-8" />
        </span>
        <h3 className="mt-6 font-display text-[22px] font-semibold text-fg">{title}</h3>
        <p className="mt-4 text-[16px] leading-[1.75] text-muted">{text}</p>
      </article>
    </li>
  );
}
