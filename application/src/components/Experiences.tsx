import Experience from "./Experience";
const Experiences = ({ student }) => (
  <div>
    {student.experiences.map((e) => (
      <Experience key={e}>{e.experience}</Experience>
    ))}
  </div>
);

export default Experiences;
