import "./styles/main.scss";
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
import Footer from "./components/Footer";

function App() {
  const student: any = {
    studentName: "Jonas A. Evensen",
    degree: "Bachelor Informasjonssystemer",
    points: 180,
    experiences: [],
    email: "jonasae@hiof.no",
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
    <>
      <Header
        student={student.studentName}
        degree={student.degree}
        points={student.points}
      />
      <Experiences>
        <Empty data={student.experiences}>
          {student.experiences.map((student: string) => (
            <Experience key={student} experience={student} />
          ))}
        </Empty>
      </Experiences>
      <CreateProject updateProject={updateProjects} />
      <Contact email={student.email} />
      <Projects projectList={projectList} removeProject={removeProject} />
      <Footer />
    </>
  );
}

export default App;
