import { serve } from "@hono/node-server";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";

const app = new Hono();

const prisma = new PrismaClient();

app.get("/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  const todo = await prisma.todo.findUnique({
    where: {
      id: id,
    },
  });
  return c.json(todo);
});

app.get("/", async (c) => {
  const todos = await prisma.todo.findMany();
  return c.json({
    todos: todos,
  });
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
