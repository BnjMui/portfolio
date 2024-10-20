import "./styles/main.scss";
import Contact from "./components/Contact";
import Empty from "./components/Empty";
import Experience from "./components/Experience";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { StudentType } from "./types";

function App() {
  const student: StudentType = {
    studentName: "Jonas A. Evensen",
    degree: "Bachelor Informasjonssystemer",
    points: 180,
    experiences: [
      "Erfaring fra eksamensarbeid",
      "Erfaring fra pluralsight kurs",
    ],
    email: "jonasae@hiof.no",
  };
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
