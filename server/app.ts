import { Hono } from "hono";
import { logger } from "hono/logger";
import { clerkMiddleware } from "@clerk/hono";
import { authRoute } from "./routes/auth";
import { projectsRoute } from "./routes/projects";

const app = new Hono();

app.use("*", logger());
app.use("*", clerkMiddleware());

const apiRoutes = app
  .basePath("/api")
  .route("/", authRoute)
  .route("/projects", projectsRoute);

export type ApiRoutes = typeof apiRoutes;
export default app;
