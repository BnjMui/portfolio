import { z } from "zod";

export { projectSchema, projectsSchema };

const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  url: z.string(),
  description: z.string(),
  createdAt: z.string().datetime(),
  category: z.string(),
  status: z.string(),
  public: z.boolean(),
  tags: z.array(z.string()),
});

const projectsSchema = z.array(projectSchema);
