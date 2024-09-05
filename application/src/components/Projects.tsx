import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Nettside for lokal kafé",
      description:
        "Utvikling av en responsiv nettside for en lokal kafé med online bestillingssystem og meny.",
    },
    {
      id: 2,
      title: "Mobilapp for treningsplanlegging",
      description:
        "En mobilapplikasjon for å lage personlige treningsplaner, spore progresjon, og dele treningsresultater.",
    },
    {
      id: 3,
      title: "E-handelsplattform for klær",
      description:
        "Opprettelse av en brukervennlig e-handelsplattform for en lokal klesbutikk, med betalingsintegrasjoner og kundelogging.",
    },
    {
      id: 4,
      title: "Bokblogg med anmeldelser",
      description:
        "En bloggplattform der brukere kan skrive og dele bokanmeldelser, samt delta i diskusjoner om ulike bøker.",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <Project key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description ?? project.id}</p>
        </Project>
      ))}
    </>
  );
}
