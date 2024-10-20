import { ofetch } from "ofetch";

const fetch = ofetch("http://localhost:3999/projects");
const add = async (newProject: any) => {
  try {
    const addedProject = await ofetch("http://localhost:3999/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });
    return addedProject;
  } catch (error) {
    console.error(error);
  }
};

export default { fetch, add };
