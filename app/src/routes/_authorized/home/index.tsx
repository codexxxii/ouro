import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  LayoutDashboard,
  Plus,
  Search,
  SlidersHorizontal,
  CalendarDays,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import SidebarItem from "@/components/side-bar-item";
import StatCard from "@/components/stat-card";
import TaskRow from "@/components/task-row";
import UpcomingTask from "@/components/upcoming-task";
import { tasks } from "@/lib/constants";
import { useContext } from "@/lib/use-context";
import CreateProjectModal from "@/components/modals/create-project-modal";
import { AnimatePresence } from "framer-motion";
import Projects from "@/components/data/projects";

export const Route = createFileRoute("/_authorized/home/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { createProjectModal, setCreateProjectModal } = useContext();

  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 border-r border-neutral-800 bg-neutral-950 lg:flex lg:flex-col">
            <div className="flex h-18 items-center border-b border-neutral-800 px-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold tracking-tight">
                  Ouro
                </span>
              </div>
            </div>
            <div className="flex-1 p-4">
              {/* Main navigation */}
              <div className="flex flex-col gap-1">
                <Link to="/home">
                  <SidebarItem
                    icon={<LayoutDashboard size={17} />}
                    label="Overview"
                    active
                  />
                </Link>
                <Link to="/tasks">
                  <SidebarItem
                    icon={<CheckCircle2 size={17} />}
                    label="My Tasks"
                  />
                </Link>
                <Link to="/calendar">
                  <SidebarItem
                    icon={<CalendarDays size={17} />}
                    label="Calendar"
                  />
                </Link>
              </div>
              {/* Projects */}
              <div className="mt-9">
                <div className="mb-2 flex items-center justify-between px-3">
                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-600">
                    Projects
                  </span>
                  <button
                    className="text-neutral-600 transition hover:text-white grid place-items-center bg-neutral-800 p-1! h-auto!"
                    onClick={() => setCreateProjectModal(true)}
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <Projects />
              </div>
            </div>
            {/* User */}
            <div className="border-t border-neutral-800 p-4">
              <button className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition hover:bg-neutral-900">
                <div className="grid size-9 place-items-center rounded-full bg-neutral-800 text-sm font-medium">
                  JD
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium"> John Doe </p>
                  <p className="truncate text-xs text-neutral-600">
                    john@example.com
                  </p>
                </div>
                <ChevronDown size={15} className="text-neutral-600" />
              </button>
            </div>
          </aside>
          {/* Main */}
          <main className="min-w-0 flex-1">
            {/* Top bar */}
            <header className="flex h-18 items-center justify-between border-b border-neutral-800 px-5 md:px-8">
              <div className="flex items-center gap-3">
                <button className="rounded-lg border border-neutral-800 p-2 text-neutral-400 lg:hidden">
                  <LayoutDashboard size={18} />
                </button>
                <div className="relative hidden sm:block">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600"
                  />
                  <input
                    placeholder="Search..."
                    className="h-9 w-64 rounded-lg border border-neutral-800 bg-neutral-900 pl-9 pr-4 text-sm outline-none placeholder:text-neutral-600 focus:border-neutral-700"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="rounded-lg border border-neutral-800 p-2 text-neutral-400 transition hover:bg-neutral-900 hover:text-white sm:hidden">
                  <Search size={17} />
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200">
                  <Plus size={16} />
                  <span className="hidden sm:inline"> New Task </span>
                </button>
              </div>
            </header>
            {/* Content */}
            <div className="mx-auto max-w-7xl p-5 md:p-8">
              {/* Welcome */}
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm text-neutral-500">Sunday, August 30</p>
                  <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
                    Good evening, John.
                  </h1>
                  <p className="mt-2 text-sm text-neutral-500">
                    Here's what's happening with your projects.
                  </p>
                </div>
                <button className="flex items-center gap-2 self-start rounded-lg border border-neutral-800 px-3 py-2 text-sm text-neutral-400 transition hover:bg-neutral-900 hover:text-white sm:self-auto">
                  <CalendarDays size={15} /> This week
                  <ChevronDown size={14} />
                </button>
              </div>
              {/* Stats */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  label="Total tasks"
                  value="38"
                  change="+6 this week"
                />
                <StatCard
                  label="Completed"
                  value="21"
                  change="55% completion"
                />
                <StatCard
                  label="Due today"
                  value="3"
                  change="1 overdue"
                  warning
                />
                <StatCard label="Projects" value="3" change="2 active" />
              </div>
              {/* Main grid */}
              <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_340px]">
                {/* Tasks */}
                <section className="rounded-xl border border-neutral-800 bg-neutral-950">
                  <div className="flex items-center justify-between border-b border-neutral-800 p-5">
                    <div>
                      <h2 className="font-medium"> My Tasks </h2>
                      <p className="mt-1 text-sm text-neutral-600">
                        Tasks that need your attention
                      </p>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg border border-neutral-800 px-3 py-2 text-xs text-neutral-400 hover:bg-neutral-900 hover:text-white">
                      <SlidersHorizontal size={14} /> Filter
                    </button>
                  </div>
                  <div>
                    {tasks.map((task) => (
                      <TaskRow key={task.id} task={task} />
                    ))}
                  </div>
                  <div className="border-t border-neutral-800 p-4">
                    <button className="text-sm text-neutral-500 transition hover:text-white">
                      View all tasks →
                    </button>
                  </div>
                </section>
                {/* Right column */}
                <div className="space-y-6">
                  {/* Progress */}
                  <section className="rounded-xl border border-neutral-800 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-medium"> Overall progress </h2>
                        <p className="mt-1 text-sm text-neutral-600">
                          Across all projects
                        </p>
                      </div>
                      <span className="text-2xl font-semibold"> 55% </span>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-800">
                      <div className="h-full w-[55%] rounded-full bg-white" />
                    </div>
                    <div className="mt-3 flex justify-between text-xs text-neutral-600">
                      <span>21 completed</span> <span>38 total</span>
                    </div>
                  </section>
                  {/* Upcoming */}
                  <section className="rounded-xl border border-neutral-800 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-medium"> Upcoming </h2>
                        <p className="mt-1 text-sm text-neutral-600">
                          Your next deadlines
                        </p>
                      </div>
                      <Clock3 size={17} className="text-neutral-600" />
                    </div>
                    <div className="mt-5 space-y-4">
                      <UpcomingTask
                        title="Implement authentication"
                        project="Website Redesign"
                        date="Sep 2"
                      />
                      <UpcomingTask
                        title="Create database schema"
                        project="Task Manager"
                        date="Sep 4"
                      />
                      <UpcomingTask
                        title="Deploy application"
                        project="Website Redesign"
                        date="Sep 7"
                      />
                    </div>
                  </section>
                  {/* Projects */}
                  <section className="rounded-xl border border-neutral-800 p-5">
                    <div className="flex items-center justify-between">
                      <h2 className="font-medium"> Projects </h2>
                      <button className="text-xs text-neutral-600 hover:text-white">
                        View all
                      </button>
                    </div>
                    <Projects />
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {createProjectModal && <CreateProjectModal />}
      </AnimatePresence>
    </>
  );
}
