import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Experience from "./components/Experience";
import Header from "./components/Header";
import CreateProject from "./components/CreateProject";
import { ProjectType } from "./components/types";
import { useState } from "react";

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
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      id: 0,
      name: "Nettside for lokal kafé",
      description:
        "Utvikling av en responsiv nettside for en lokal kafé med online bestillingssystem og meny.",
    },
    {
      id: 1,
      name: "Mobilapp for treningsplanlegging",
      description:
        "En mobilapplikasjon for å lage personlige treningsplaner, spore progresjon, og dele treningsresultater.",
    },
    {
      id: 2,
      name: "E-handelsplattform for klær",
      description:
        "Opprettelse av en brukervennlig e-handelsplattform for en lokal klesbutikk, med betalingsintegrasjoner og kundelogging.",
    },
    {
      id: 3,
      name: "Bokblogg med anmeldelser",
      description:
        "En bloggplattform der brukere kan skrive og dele bokanmeldelser, samt delta i diskusjoner om ulike bøker.",
    },
  ]);

  return (
    <>
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
      <CreateProject projects={projects} setProjects={setProjects} />
      <Projects projects={projects} setProjects={setProjects} />
    </>
  );
}

export default App;
