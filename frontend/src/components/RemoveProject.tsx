import { ProjectType } from "./types";

type RemoveProps = {
  id: number;
  projects: ProjectType[];
  setProjects: (projects: any[]) => void;
};

export default function RemoveProject({
  id,
  projects,
  setProjects,
}: RemoveProps) {
  const removeProject = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id != id);
    setProjects(updatedProjects);
  };
  return (
    <button
      onClick={() => {
        removeProject(id);
      }}
    >
      Remove project
    </button>
  );
}
