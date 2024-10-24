import { readFile, writeFile } from "node:fs/promises";
import { Hono } from "hono";
import { cors } from "hono/cors";
import path from "node:path";

const app = new Hono();

app.use("/*", cors());
const dataPath = path.resolve(__dirname, "./imaginary_database/data.json");
app.get("/projects", async (c) => {
  try {
    const data = await readFile(dataPath, "utf-8");
    return c.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading file", error);
    return c.json({ status: 500, message: "Internal server error" });
  }
});
app.post("/add", async (c) => {
  const newProject = await c.req.json();
  const data = readFile(dataPath, "utf-8");
  let projects: Project[] = JSON.parse(await data);
  projects.push({
    ...newProject,
  });
  console.log(projects);

  await writeFile(dataPath, JSON.stringify(projects, null, 2));
  console.log("New data added");
  console.log(newProject);

  return c.json({ projects, status: 201 });
});

export default app;
