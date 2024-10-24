import { useEffect, useState } from "react";
import { ProjectType } from "@/types/types.ts";
import projectsApi from "../services/projectsApi.ts";
import { projectsSchema } from "../lib/validate.ts";

export function useProjects() {
  const [projectList, setProjectList] = useState<ProjectType[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await projectsApi.fetch;
      console.log(projectsSchema.safeParse(response));
      console.log(response);
      setProjectList(projectsSchema.parse(response));
    } catch (error) {
      console.error(error);
    }
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

  const update = (data: Partial<ProjectType>) => {
    const project: ProjectType = {
      id: crypto.randomUUID(),
      title: data.title || "Default name",
      url: data.url || "no url",
      description: data.description || "no description",
      createdAt: new Date().toISOString(),
      public: data.public || false,
      status: "draft",
      tags: [],
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
    add,
    update,
    remove,
    projectList,
    categoryCounts,
  };
}

export default useProjects;
