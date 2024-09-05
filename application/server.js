import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile, writeFile } from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/statics/*", serveStatic({ root: ":/" }));

app.get("/", async (c) => {
  const data = await readFile("./data.json", "utf-8");
  return c.json(JSON.parse(data));
});

app.post("/add", async (c) => {
  const newProject = await c.req.json();
  const data = await readFile("./data.json");
  let projects = await JSON.parse(data);
  projects.push({
    id: projects.length,
    createdAt: new Date(),
    ...newProject,
  });
  await writeFile("./data.json", JSON.stringify(projects, null, 2));
  console.log("new data added");
  console.log({
    id: projects.length - 1,
    createdAt: new Date(),
    ...newProject,
  });

  return c.json(projects, { status: 201 });
});

const port = 3999;

console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port,
});
