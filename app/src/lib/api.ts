import { hc } from "hono/client";
import type { ApiRoutes } from "@server/app";
import { queryOptions } from "@tanstack/react-query";

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
