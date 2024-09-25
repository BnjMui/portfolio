import { useEffect } from "react";
import { ProjectType } from "../types";
import Empty from "./Empty";
import Project from "./Project";

export default function Projects({
  projectList,
  removeProject,
}: {
  projectList: ProjectType[];
  removeProject: Function;
}) {
  //Laget med hjelp av Claude
  const projectsByCategory = (projectList: ProjectType[]) => {
    return projectList?.reduce((acc, project) => {
      if (project.category) {
        acc[project.category] = (acc[project.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  };
  const categoryCounts = projectsByCategory(projectList);
  useEffect(() => {}, [projectList]);

  return (
    <>
      <h2>Live projects</h2>
      <Empty data={projectList}>
        {projectList?.map((p, index) => (
          <Project key={index}>
            <h3>{p.title}</h3>
            <h4>Url: </h4>
            <a href={p.url}>{p.url}</a>
            <h4>Project description:</h4>
            <p>{p.description}</p>
            <h4>Category: {p.category ? p.category : "No category found"}</h4>
            <button
              type="button"
              onClick={() => {
                removeProject(p.id);
              }}
            >
              Remove project
            </button>
          </Project>
        ))}
        <h2>Total projects per category:</h2>
        <ul>
          {categoryCounts
            ? Object.entries(categoryCounts).map(([category, count]) => (
                <li key={category}>
                  {category}: {count}
                </li>
              ))
            : null}
        </ul>
      </Empty>
    </>
  );
}
