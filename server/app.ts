import { Hono } from "hono";
import { logger } from "hono/logger";
import { helloRoute } from "./routes/hello";
import { clerkMiddleware } from "@clerk/hono";

const app = new Hono();

app.use("*", logger());
app.use("*", clerkMiddleware());

const apiRoutes = app.basePath("/api").route("/hello", helloRoute);

export type ApiRoutes = typeof apiRoutes;
export default app;
