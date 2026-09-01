import type z from "zod";
import { insertProjectSchema } from "./db/schema";

export const projectSchema = insertProjectSchema.omit({
  id: true,
  created_at: true,
  user_id: true,
});

export type ProjectSchema = z.infer<typeof projectSchema>;
