type ProjectType = {
  id: number | string;
  title: string;
  description?: string;
};

export default function Project(project: ProjectType) {
  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description ?? project.id}</p>
    </>
  );
}
