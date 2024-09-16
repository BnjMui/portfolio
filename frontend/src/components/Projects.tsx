import { useState } from "react";
import Project from "./Project";
import RemoveProject from "./RemoveProject";

export default function Projects({ projects, setProjects }) {
  const [categories, setCategories] = useState<string[]>([]);
  return (
    <>
      <h2>Current projects</h2>
      {projects.length === 0 ? (
        <p> Ingen prosjekter</p>
      ) : (
        projects?.map((project) => {
          <Project key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description ?? project.id}</p>
            <RemoveProject
              id={project.id}
              projects={projects}
              setProjects={setProjects}
            />
          </Project>;
          if (!categories.some((cat) => cat === project.category)) {
            setCategories((prev: []) => [...prev, project.category]);
          }
          <p>{categories}</p>;
        })
      )}
    </>
  );
}
