import { ofetch } from "ofetch";
import { endpoints } from "@/configs/urls";

const fetch = ofetch(endpoints.projects);

const add = async (newProject: any) => {
  try {
    const addedProject = await ofetch(endpoints.add, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newProject,
    });
    return addedProject;
  } catch (error) {
    console.error(error);
  }
};

export default { fetch, add };
