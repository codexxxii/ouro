import CreateProjectModal from "@/components/modals/create-project-modal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useContext } from "@/lib/use-context";
import { AnimatePresence } from "framer-motion";
import { AlertCircle, Plus } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { projectQueryOptions } from "@/lib/api";

export const Route = createFileRoute("/_authorized/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { createProjectModal, setCreateProjectModal } = useContext();

  const { data, isLoading, error } = useQuery(projectQueryOptions);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-5 space-y-5">
        <header className="w-full flex justify-between items-center">
          <p className="text-3xl font-semibold">Projects</p>
          <button
            className="flex items-center gap-2 rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
            onClick={() => setCreateProjectModal(true)}
          >
            <Plus size={16} />
            <span className="hidden sm:inline"> New Project </span>
          </button>
        </header>
        {isLoading && (
          <div className="w-full h-20 grid place-items-center">
            <div className="w-8 h-8 rounded-full border border-neutral-800 animate-spin border-r-transparent!" />
          </div>
        )}
        {data && data.data.length > 0 ? (
          <div className="w-full grid grid-cols-3 gap-4 place-items-start">
            {data.data.map(project => (
              <Link to="/projects/$projectId" params={{ projectId: project.id}}>
                
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <p>No projects</p>
          </div>
        )}
        {error && (
          <div>
            <AlertCircle size={20} />
            <p>Something went wrong, try again</p>
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {createProjectModal && <CreateProjectModal />}
      </AnimatePresence>
    </>
  );
}
