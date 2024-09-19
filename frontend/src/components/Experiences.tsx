import Experience from "./Experience";

type ExperienceProps = {
  experienceOne: string;
  experienceTwo: string;
};
export default function Experiences(props: ExperienceProps) {
  const { experienceOne = "", experienceTwo = "" } = props;
  return (
    <>
      <Experience experience={experienceOne} />
      <Experience experience={experienceTwo} />
    </>
  );
}
