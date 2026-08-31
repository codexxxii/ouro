import type { tasks } from "@/lib/constants";
import { Check, Circle, MoreHorizontal } from "lucide-react";

export default function TaskRow({ task }: { task: (typeof tasks)[number] }) {
  return (
    <div className="group flex items-center gap-4 border-b border-neutral-800 px-5 py-4 transition hover:bg-neutral-900/40">
      <button className="shrink-0">
        {task.completed ? (
          <div className="grid size-5 place-items-center rounded-full bg-white text-black">
            <Check size={12} strokeWidth={3} />
          </div>
        ) : (
          <Circle
            size={20}
            className="text-neutral-700 transition group-hover:text-neutral-500"
          />
        )}
      </button>
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm ${task.completed ? "text-neutral-600 line-through" : "text-neutral-200"}`}
        >
          {task.title}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className="truncate text-xs text-neutral-600">
            {task.project}
          </span>
          <span className="text-neutral-800">•</span>
          <span
            className={`text-xs ${task.priority === "High" ? "text-red-400" : task.priority === "Medium" ? "text-amber-400" : "text-neutral-600"}`}
          >
            {task.priority}
          </span>
        </div>
      </div>
      <div className="hidden shrink-0 items-center gap-4 sm:flex">
        <span
          className={`text-xs ${task.due === "Today" ? "text-amber-400" : "text-neutral-600"}`}
        >
          {task.due}
        </span>
        <button className="text-neutral-700 opacity-0 transition group-hover:opacity-100 hover:text-white">
          <MoreHorizontal size={17} />
        </button>
      </div>
    </div>
  );
}
