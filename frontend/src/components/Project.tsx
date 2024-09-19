import { ProjectType } from "./Projects";

type ProjectProps = {
  project: ProjectType;
};
export default function Project({ project }: ProjectProps) {
  const { id, title, description } = project;
  return (
    <>
      <article key={id}>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </>
  );
}
