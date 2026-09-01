import { useQuery } from "@tanstack/react-query";
import { getProjects } from "@/lib/api";

export default function Projects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return (
    <>
      {isLoading && (
        <div className="w-full h-10 grid place-items-center">
          <div className="rounded-full border border-neutral-800 border-r-transparent! animate-spin" />
        </div>
      )}
      {error && (
        <div className="w-full h-10 grid place-items-center">
          <p className="text-center text-neutral-500 text-sm">
            Something went wrong, try again
          </p>
        </div>
      )}
      {data && (
        <div className="space-y-1">
          {data.data.map((project) => (
            <button
              key={project.name}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
            >
              <span className={`size-2 rounded-full bg-sky-700`} />
              <span className="truncate">{project.name}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
