import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Experience from "./components/Experience";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";

function App() {
  const student = {
    name: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    experiences: [
      { name: "Figma UI for customer X" },
      { name: "Website for customer Y" },
    ],

    email: "student@hiof.no",
  };

  return (
    <div>
      <CreateProject />
      <Header student={student} />
      <Experiences>
        {student.experiences.length === 0 ? (
          <p>Ingen erfaringer</p>
        ) : (
          student.experiences?.map((e, index) => (
            <Experience key={index}>{e.name}</Experience>
          ))
        )}
      </Experiences>
      <Contact student={student} />
      <Projects />
    </div>
  );
}

export default App;
