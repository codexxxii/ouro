import { relations } from "drizzle-orm";
import { pgTable, uuid, timestamp, text, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Tables
export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  clerk_id: text("clerk_id").unique().notNull(),
  email: text("email").unique().notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  user_id: text("user_id")
    .references(() => users.clerk_id, { onDelete: "cascade" })
    .notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
});

export const tasks = pgTable("tasks", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  created_at: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  user_id: text("user_id")
    .references(() => users.clerk_id, { onDelete: "cascade" })
    .notNull(),
  project_id: uuid("project_id")
    .references(() => projects.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  priority: text("priority").notNull(),
  completed: boolean("completed").default(false).notNull(),
  due_date: timestamp("due_date", { withTimezone: true }).notNull(),
  updated_at: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Relations
export const userRelations = relations(users, ({ many }) => ({
  projects: many(projects),
  tasks: many(tasks),
}));

export const projectRelations = relations(projects, ({ one, many }) => ({
  user: one(users, {
    fields: [projects.user_id],
    references: [users.clerk_id],
  }),
  tasks: many(tasks),
}));

export const taskRelations = relations(tasks, ({ one }) => ({
  user: one(users, {
    fields: [tasks.user_id],
    references: [users.clerk_id],
  }),
  project: one(projects, {
    fields: [tasks.project_id],
    references: [projects.id],
  }),
}));

// Schemas
export const insertProjectSchema = createInsertSchema(projects).extend({
  name: z.string().min(1, "Project name must be atleast 1 character"),
  description: z
    .string()
    .min(1, "Project description must be atleast 1 character")
    .max(300, "Project name must be at most 300 characters"),
});
