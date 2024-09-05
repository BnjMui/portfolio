import Projects from "./components/Projects";
import Contact from "./Contact";
import Experiences from "./components/Experiences";
import Header from "./Header";

function App() {
  const student = {
    name: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    experiences: [
      {
        experienceOne: "Figma UI for customer X",
        experienceTwo: "Website for customer Y",
      },
    ],
    email: "student@hiof.no",
  };

  return (
    <div>
      <Header student={student} />
      <Experiences student={student} />
      <Contact student={student} />

      <Projects />
    </div>
  );
}

export default App;
