import Project from "./Project";
import { FormData } from "./types";

export default function Projects() {
  const projects: FormData[] = [
    {
      id: 1,
      name: "Nettside for lokal kafé",
      description:
        "Utvikling av en responsiv nettside for en lokal kafé med online bestillingssystem og meny.",
    },
    {
      id: 2,
      name: "Mobilapp for treningsplanlegging",
      description:
        "En mobilapplikasjon for å lage personlige treningsplaner, spore progresjon, og dele treningsresultater.",
    },
    {
      id: 3,
      name: "E-handelsplattform for klær",
      description:
        "Opprettelse av en brukervennlig e-handelsplattform for en lokal klesbutikk, med betalingsintegrasjoner og kundelogging.",
    },
    {
      id: 4,
      name: "Bokblogg med anmeldelser",
      description:
        "En bloggplattform der brukere kan skrive og dele bokanmeldelser, samt delta i diskusjoner om ulike bøker.",
    },
  ];

  return (
    <>
      {projects.length === 0 ? (
        <p> Ingen prosjekter</p>
      ) : (
        projects?.map((project) => (
          <Project key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description ?? project.id}</p>
          </Project>
        ))
      )}
    </>
  );
}
