import { BoltIcon, CompassIcon, FlaskIcon, RocketIcon } from "@/components/icons";
import type { LabFeatureIcon } from "@/config/content/pt";

const icons = {
  research: FlaskIcon,
  prototype: CompassIcon,
  agile: BoltIcon,
  scale: RocketIcon,
} satisfies Record<LabFeatureIcon, unknown>;

type LabFeaturesProps = { features: { icon: LabFeatureIcon; label: string }[] };

// 2×2 list of what the lab does: red outline icon + label.
export function LabFeatures({ features }: LabFeaturesProps) {
  return (
    <ul className="mt-12 grid gap-x-10 gap-y-7 sm:grid-cols-2">
      {features.map(({ icon, label }) => {
        const Icon = icons[icon];
        return (
          <li key={label} className="flex items-center gap-3 text-[17px] text-fg sm:text-[19px]">
            <Icon className="size-6 shrink-0 text-red" strokeWidth={1.8} />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
