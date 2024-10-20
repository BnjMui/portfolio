import { useEffect, useState } from "react";
import { ProjectType } from "../types";
import projectsApi from "../components/services/projectsApi.ts";

export function useProjects() {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    const response = await projectsApi.fetch;
    console.log(response);
    setProjectList(response);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const add = async (newProject: any) => {
    try {
      await projectsApi.add(newProject);
      console.log("Project added to server");
      console.log("ProjectData: \n", newProject);
    } catch (error) {
      console.error("Error when adding new project to server");
      console.error("error", error);
    }
  };

  const update = (data: {
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
    add(project);
  };
  const remove = (projectId: string) => {
    setProjectList(projectList.filter((project) => projectId !== project.id));
  };
  //Laget med hjelp av Claude
  const projectsByCategory = (projectList: ProjectType[]) => {
    return projectList?.reduce((acc, project) => {
      if (project.category) {
        acc[project.category] = (acc[project.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
  };
  const categoryCounts = projectsByCategory(projectList);
  useEffect(() => {}, [projectList]);
  return {
    get: fetchProjects,
    add,
    update,
    remove,
    projectList,
    categoryCounts,
  };
}

export default useProjects;
