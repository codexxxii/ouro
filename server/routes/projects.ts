import { Hono } from "hono";

export const projectsRoute = new Hono()
  .get("/", (c) => {
    return c.json({ projects: [] });
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({ id });
  });
//   .post("/", (c) => {})
//   .patch("/:id", (c) => {})
//   .delete("/:id", (c) => {});
