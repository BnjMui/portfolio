import Empty from "../components/Empty";
import Contact from "../features/contact/components/Contact";
import Experience from "../features/experience/components/Experience";
import Experiences from "../features/experience/components/Experiences";
import Projects from "../features/projects/components/Projects";
import { student } from "../configs/student";
export default function HomePage() {
  return (
    <>
      <section>
        <Experiences>
          <Empty data={student.experiences}>
            {student.experiences.map((student: string) => (
              <Experience key={student} experience={student} />
            ))}
          </Empty>
        </Experiences>
        <Contact email={student.email} />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}
