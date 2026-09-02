import CreateProjectModal from "@/components/modals/create-project-modal";
import { getCurrentUser } from "@/lib/api";
import {
  createFileRoute,
  Link,
  Navigate,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useContext } from "@/lib/use-context";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Folders,
  LayoutDashboard,
  Plus,
} from "lucide-react";
import Projects from "@/components/data/projects";
import SidebarItem from "@/components/sidebar-item";

export const Route = createFileRoute("/_authorized")({
  beforeLoad: ({ context }) => {
    const data = context.queryClient.query({
      queryKey: ["current-user"],
      queryFn: getCurrentUser,
      staleTime: Infinity,
    });
    return data;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const user = Route.useRouteContext();

  const location = useLocation();

  const { createProjectModal, setCreateProjectModal } = useContext();

  if (!user.userData) {
    return Navigate({ to: "/" });
  }

  return (
    <>
      <div className="min-h-screen bg-neutral-950 text-white">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 border-r border-neutral-800 bg-neutral-950 lg:flex lg:flex-col">
            <div className="flex h-18 items-center border-b border-neutral-800 px-6">
              <div className="flex items-center gap-2">
                <Link to="/home">
                  <span className="text-2xl font-semibold tracking-tight">
                    Ouro
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex-1 p-4">
              {/* Main navigation */}
              <div className="flex flex-col gap-1">
                <Link to="/home">
                  <SidebarItem
                    icon={<LayoutDashboard size={17} />}
                    label="Overview"
                    active={location.pathname === "/home"}
                  />
                </Link>
                <Link to="/projects">
                  <SidebarItem
                    icon={<Folders size={17} />}
                    label="My Projects"
                    active={location.pathname === "/projects"}
                  />
                </Link>
                <Link to="/tasks">
                  <SidebarItem
                    icon={<CheckCircle2 size={17} />}
                    label="My Tasks"
                    active={location.pathname === "/tasks"}
                  />
                </Link>
                <Link to="/calendar">
                  <SidebarItem
                    icon={<CalendarDays size={17} />}
                    label="Calendar"
                    active={location.pathname === "/calendar"}
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

          <Outlet />
        </div>
      </div>
      <AnimatePresence mode="wait">
        {createProjectModal && <CreateProjectModal />}
      </AnimatePresence>
    </>
  );
}
