import { Hono } from "hono";
import { logger } from "hono/logger";
import { helloRoute } from "./routes/hello";

const app = new Hono().basePath("/api").route("/hello", helloRoute);

app.use("*", logger());

export default app;
