import Empty from "@/components/Empty";
import Project from "./Project";
import useProjects from "../hooks/useProjects";
import CreateProject from "./CreateProject";
import { FormatedDate } from "../lib/format";

export default function Projects() {
  const { projectList, remove, categoryCounts } = useProjects();

  return (
    <>
      <section>
        <CreateProject />
      </section>
      <section id="projects">
        <h2>Live projects</h2>
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
                <h4>Category:</h4>
                <p>{p.category ? p.category : "No category found"}</p>
                <h4>Status:</h4>
                <p> {p.status}</p>
                <h4>Tags:</h4>
                <p>{p.tags.join(", ")}</p>
                <h4>Visibility:</h4>
                <p> {p.public ? "Public" : "Private"}</p>
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
        </Empty>
      </section>
    </>
  );
}
