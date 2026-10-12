import { ArrowRightIcon } from "@/components/icons";

type HeroControlsProps = {
  total: number;
  active: number;
  isRunning: boolean;
  intervalMs: number;
  labels: { previous: string; next: string; goTo: string };
  onSelect: (index: number) => void;
  onStep: (step: 1 | -1) => void;
};

const arrowButton =
  "grid size-10 place-items-center rounded-full border border-fg/25 text-fg transition hover:border-red hover:bg-red hover:text-white";

// Counter, progress bars (fill while each banner is shown) and previous/next arrows.
export function HeroControls({ total, active, isRunning, intervalMs, labels, onSelect, onStep }: HeroControlsProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-[14px] tabular-nums text-muted">
        <span className="text-fg">0{active + 1}</span> / 0{total}
      </span>

      <div className="flex gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${labels.goTo} ${i + 1}`}
            aria-current={i === active}
            onClick={() => onSelect(i)}
            className="relative h-6 w-7 sm:w-10"
          >
            <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-fg/15">
              {i === active && (
                <span
                  key={active}
                  className="block size-full origin-left bg-red motion-safe:animate-progress"
                  style={{ animationDuration: `${intervalMs}ms`, animationPlayState: isRunning ? "running" : "paused" }}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div className="ml-auto flex gap-2 lg:ml-4">
        <button type="button" aria-label={labels.previous} onClick={() => onStep(-1)} className={arrowButton}>
          <ArrowRightIcon className="size-4 rotate-180" />
        </button>
        <button type="button" aria-label={labels.next} onClick={() => onStep(1)} className={arrowButton}>
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </div>
  );
}
