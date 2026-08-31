import { Clock3 } from "lucide-react";

export default function UpcomingTask({
  title,
  project,
  date,
}: {
  title: string;
  project: string;
  date: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-neutral-900">
        <Clock3 size={14} className="text-neutral-500" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-neutral-300"> {title} </p>
        <div className="mt-1 flex justify-between gap-2">
          <span className="truncate text-xs text-neutral-600">{project}</span>
          <span className="shrink-0 text-xs text-neutral-500">{date}</span>
        </div>
      </div>
    </div>
  );
}
