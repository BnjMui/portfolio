import Project from "./Project";

export type ProjectType = {
  id: string;
  title: string;
  description: string;
};
export default function Projects() {
  const projectList: ProjectType[] = [
    {
      id: "1",
      title: "Website Redesign",
      description:
        "Overhaul the company's main website to improve user experience and modernize the design.",
    },
    {
      id: "2",
      title: "Mobile App Development",
      description:
        "Create a cross-platform mobile app for customers to access our services on-the-go.",
    },
    {
      id: "3",
      title: "Database Optimization",
      description:
        "Improve database performance and structure to handle increased user load and data complexity.",
    },
    {
      id: "4",
      title: "AI Chatbot Integration",
      description:
        "Implement an AI-powered chatbot to enhance customer support and automate common inquiries.",
    },
  ];
  return (
    <>
      {projectList.map((p, index) => (
        <Project key={index} project={p} />
      ))}
    </>
  );
}
