import "./styles/main.scss";
import { useEffect, useState } from "react";
import { ofetch } from "ofetch";
import Contact from "./components/Contact";
import CreateProject from "./components/CreateProject";
import Empty from "./components/Empty";
import Experience from "./components/Experience";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ProjectType } from "./types";
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
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    const response = await ofetch("http://localhost:3999/projects");
    console.log(response);
    setProjectList(response);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (newProject: any) => {
    try {
      const response = await ofetch("http://localhost:3999/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      if (response.status === 201) {
        console.log("Project added to server");
        console.log("ProjectData: \n", newProject);
        fetchProjects();
      } else {
        console.error("Error when adding new project to server", response);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  const updateProjects = (data: {
    title: string;
    description: string;
    category?: string;
  }) => {
    const project: ProjectType = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setProjectList((prev) => [...prev, project]);
    addProject(project);
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
          <CreateProject updateProject={updateProjects} />
          <Projects projectList={projectList} removeProject={removeProject} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
