import { Hono } from "hono";
import { getUser } from "../clerk";
import { zValidator } from "@hono/zod-validator";
import { projectSchema } from "../shared-types";
import { insertProjectSchema, projects } from "../db/schema";
import { db } from "../db";
import { and, eq } from "drizzle-orm";

export const projectsRoute = new Hono()
  .get("/", getUser, async (c) => {
    try {
      const { userId } = c.var.user;

      const data = await db.query.projects.findMany({
        where: eq(projects.user_id, userId),
        orderBy: (projects, { desc }) => [desc(projects.created_at)],
        columns: {
          id: true,
          name: true,
        },
        with: {
          tasks: true,
        },
      });

      return c.json({ data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  })
  .get("/:id", (c) => {
    const id = c.req.param("id");
    return c.json({ id });
  })
  .post("/", getUser, zValidator("json", projectSchema), async (c) => {
    try {
      const { userId } = c.var.user;
      const project = c.req.valid("json");

      const validateSchema = insertProjectSchema.parse({
        ...project,
        user_id: userId,
      });

      const data = await db
        .insert(projects)
        .values(validateSchema)
        .returning()
        .then((res) => res[0]);

      return c.json({ data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  });
//   .patch("/:id", (c) => {})
//   .delete("/:id", (c) => {});
