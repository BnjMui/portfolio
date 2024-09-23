import Empty from "./Empty";
import Project from "./Project";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  category?: string;
};
export default function Projects({
  projectList,
  removeProject,
}: {
  projectList: ProjectType[];
  removeProject: Function;
}) {
  const projectsByCategory = projectList.reduce((totals, project) => {
    //Funksjon lånt av ChatGPT :))) Kildehenvisning er viktig!!
    const category = project.category || "Uncategorized";
    totals[category] = (totals[category] || 0) + 1;
    return totals;
  }, {} as { [category: string]: number });

  return (
    <>
      <h2>Live projects</h2>
      <Empty data={projectList}>
        {projectList.map((p, index) => (
          <Project key={index}>
            <h3>{p.title}</h3>
            <p>Project description:</p>
            <p>{p.description}</p>
            <p>Category: {p.category ? p.category : "No category found"}</p>
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
          {Object.entries(projectsByCategory).map(
            (
              [category, total] //Funksjon lånt av ChatGPT :))) Kildehenvisning er viktig!!
            ) => (
              <li key={category}>
                {category}: {total} project(s)
              </li>
            )
          )}
        </ul>
      </Empty>
    </>
  );
}
