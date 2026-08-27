import { pgTable, uuid, timestamp, text, boolean } from "drizzle-orm/pg-core";

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
