import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors());

app.get("/projects", (c) => {
  return c.json({
    projects: [
      {
        id: 1,
        title: "Weather App",
        description:
          "A web application that displays real-time weather data using an API.",
        createdAt: new Date("2024-05-12"),
        category: "Web Development",
      },
      {
        id: 2,
        title: "Personal Blog",
        description:
          "A blogging platform with Markdown support and user authentication.",
        createdAt: new Date("2024-06-24"),
        category: "Content Management",
      },
      {
        id: 3,
        title: "Inventory System",
        description:
          "A desktop app to manage stock levels, orders, and suppliers for a small business.",
        createdAt: new Date("2024-07-15"),
        category: "Business Applications",
      },
      {
        id: 4,
        title: "Task Tracker",
        description:
          "A mobile app for tracking daily tasks, deadlines, and priorities.",
        createdAt: new Date("2024-08-10"),
        category: "Productivity",
      },
      {
        id: 5,
        title: "Portfolio Website",
        description:
          "A personal website to showcase projects, skills, and a resume.",
        createdAt: new Date("2024-09-05"),
        category: "Personal Branding",
      },
    ],
  });
});

export default app;
