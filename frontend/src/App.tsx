import "./styles/main.scss";
import Contact from "./features/contact/components/Contact";
import Empty from "./components/Empty";
import Experience from "./features/experience/components/Experience";
import Experiences from "./features/experience/components/Experiences";
import Header from "./components/Header";
import Projects from "./features/projects/components/Projects";
import Footer from "./components/Footer";
import { student } from "./configs/student";

function App() {
  return (
    <>
      <Header
        student={student.studentName}
        degree={student.degree}
        points={student.points}
      />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;
