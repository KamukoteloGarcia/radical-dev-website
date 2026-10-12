import { CodeIcon } from "@/components/icons";
import type { Content } from "@/config/content";

type ProjectCardProps = {
  title: string;
  project: Content["app"]["project"];
};

export function ProjectCard({ title, project }: ProjectCardProps) {
  return (
    <div className="mx-3 mt-3 min-h-0 flex-1 rounded-[14px] bg-white/[0.04] p-2.5 ring-1 ring-white/5">
      <div className="flex items-center gap-2.5">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-red/15 text-red">
          <CodeIcon className="size-3.5" />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[8.5px] text-white/50">{title}</p>
          <p className="truncate text-[10px] font-medium">{project.name}</p>
        </div>
        <span className="text-[10px] font-semibold text-red">{project.progress}%</span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-red" style={{ width: `${project.progress}%` }} />
      </div>
    </div>
  );
}
