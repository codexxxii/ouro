import { Hono } from "hono";
import { getUser } from "../clerk";

export const authRoute = new Hono().get("/current-user", getUser, (c) => {
  const { userId } = c.var.user;
  const clerkClient = c.get("clerk");

  const userData = clerkClient.users.getUser(userId);

  return c.json({ userData });
});
