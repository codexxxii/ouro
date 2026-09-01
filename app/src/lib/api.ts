import { hc } from "hono/client";
import type { ApiRoutes } from "@server/app";
import { queryOptions } from "@tanstack/react-query";
import type { ProjectSchema } from "@server/shared-types";
import { queryClient } from "@/main";

const api = hc<ApiRoutes>("/").api;

async function getCurrentUser() {
  try {
    const res = await api["current-user"].$get();
    if (!res.ok) {
      throw new Error("SERVER ERROR");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const userQueryOptions = queryOptions({
  queryKey: ["current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});

// Projects
export async function getProjects() {
  try {
    const res = await api.projects.$get();

    if (!res.ok) {
      throw new Error("SERVER ERROR");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createProject({ project }: { project: ProjectSchema }) {
  try {
    const res = await api.projects.$post({
      json: { name: project.name, description: project.description },
    });

    if (!res.ok) {
      throw new Error("SERVER ERROR");
    }

    const data = await res.json();

    queryClient.invalidateQueries({ queryKey: ["projects"] });

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
