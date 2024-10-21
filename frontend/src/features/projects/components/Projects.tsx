import Empty from "@/components/Empty";
import Project from "./Project";
import useProjects from "../hooks/useProjects";
import CreateProject from "./CreateProject";
import { FormatedDate } from "../lib/format";

export default function Projects() {
  const { projectList, remove, update, categoryCounts } = useProjects();

  return (
    <>
      <CreateProject updateProject={update} />

      <h2>Live projects</h2>
      <Empty data={projectList}>
        <div id="project-list">
          {projectList?.map((p, index) => (
            <Project key={index}>
              <h3>{p.title}</h3>
              <p>Published: {FormatedDate(p.createdAt)}</p>
              <h4>Url: </h4>
              <a href={p.url}>{p.url}</a>
              <h4>Project description:</h4>
              <p>{p.description}</p>
              <h4>Category: {p.category ? p.category : "No category found"}</h4>
              <button
                type="button"
                onClick={() => {
                  remove(p.id);
                }}
              >
                Remove project
              </button>
            </Project>
          ))}
        </div>
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
