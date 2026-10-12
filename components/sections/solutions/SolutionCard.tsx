import { ArrowRightIcon, CloudIcon, LockIcon, MonitorIcon, PaletteIcon, SmartphoneIcon, SparklesIcon } from "@/components/icons";
import type { SolutionIcon } from "@/config/content/pt";

const icons = {
  web: MonitorIcon,
  mobile: SmartphoneIcon,
  data: SparklesIcon,
  design: PaletteIcon,
  cloud: CloudIcon,
  security: LockIcon,
} satisfies Record<SolutionIcon, unknown>;

type SolutionCardProps = {
  icon: SolutionIcon;
  title: string;
  text: string;
  index: number;
  more: string;
};

// Card that tilts back in 3D on hover while its icon tile spins once.
export function SolutionCard({ icon, title, text, index, more }: SolutionCardProps) {
  const Icon = icons[icon];

  return (
    <li className="group perspective-[1000px]">
      <article className="relative h-full overflow-hidden rounded-[22px] border border-line bg-card p-7 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.35)] transition duration-500 ease-out group-hover:shadow-[0_30px_60px_-30px_var(--glow)] motion-safe:group-hover:[transform:rotateX(6deg)_translateY(-6px)]">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100" />
        <span aria-hidden="true" className="absolute right-6 top-5 font-display text-[40px] font-semibold leading-none text-fg/[0.06]">
          0{index + 1}
        </span>

        <span className="grid size-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,var(--red),var(--red-deep))] text-white shadow-[0_12px_24px_-10px_var(--glow),inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-700 motion-safe:group-hover:[transform:rotateY(360deg)]">
          <Icon className="size-6" />
        </span>

        <h3 className="mt-6 font-display text-[20px] font-semibold text-fg">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>

        <a href="#contactos" className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-red">
          {more}
          <span className="sr-only">: {title}</span>
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </article>
    </li>
  );
}
