type ExperienceProps = {
  experience: string;
};
export default function Experience({ experience }: ExperienceProps) {
  return (
    <>
      <p>{experience}</p>
    </>
  );
}
