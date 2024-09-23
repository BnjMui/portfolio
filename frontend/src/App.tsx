import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import CreateProject from "./components/CreateProject";
import Empty from "./components/Empty";
import Experience from "./components/Experience";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { ProjectType } from "./components/Projects";
import { ofetch } from "ofetch";

function App() {
  const student: any = {
    studentName: "Halgeir Geirson",
    degree: "Bachelor IT",
    points: 180,
    experiences: ["Figma UI for customer X", "Website for customer Y"],
    email: "student@hiof.no",
  };
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    const response = await ofetch("http://localhost:3999/projects");
    console.log(response.projects);
    setProjectList(response.projects);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const updateProjects = (data: {
    title: string;
    description: string;
    category?: string;
  }) => {
    const project = { id: crypto.randomUUID(), ...data };
    setProjectList((prev) => [...prev, project]);
  };
  const removeProject = (projectId: string) => {
    setProjectList(projectList.filter((project) => projectId !== project.id));
  };
  return (
    <div>
      <Header
        student={student.studentName}
        degree={student.degree}
        points={student.points}
      />
      <CreateProject updateProject={updateProjects} />
      <Experiences>
        <h2>Experience</h2>
        <Empty data={student}>
          {student.experiences.map((student: string) => (
            <Experience key={student} experience={student} />
          ))}
        </Empty>
      </Experiences>
      <Contact email={student.email} />
      <Projects projectList={projectList} removeProject={removeProject} />
    </div>
  );
}

export default App;
