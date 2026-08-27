import { hc } from "hono/client";
import type { ApiRoutes } from "@server/app";

const api = hc<ApiRoutes>("/").api;
