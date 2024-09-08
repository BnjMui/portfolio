import { useState } from "react";
import { FormData } from "./types";

export default function CreateProject() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    category: "",
    url: "",
    description: "",
  });
  const [newProjects, setNewProjects] = useState<FormData[]>([]);

  const createProject = (event: React.FormEvent) => {
    event.preventDefault();

    const projectExists = newProjects.some(
      (project) => project.name === formData.name
    );
    if (projectExists) {
      console.error("A project with that name already exists.");
      return;
    }
    setNewProjects((prev) => [...prev, formData]);

    setFormData({
      name: "",
      category: "",
      url: "",
      description: "",
    });
  };

  const updateValues = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h2>Create or add a new project</h2>
      {/* <pre>{JSON.stringify({ formData, newProjects }, null, 2)}</pre> */}
      <form onSubmit={createProject}>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={updateValues}
          value={formData.name}
          placeholder="Enter projectname..."
        />
        <label htmlFor="category"></label>
        <input
          type="text"
          id="category"
          name="category"
          onChange={updateValues}
          value={formData.category}
          placeholder="Enter category"
        />
        <label htmlFor="link"></label>
        <input
          type="url"
          id="link"
          name="url"
          onChange={updateValues}
          value={formData.url}
          placeholder="Enter prject/repository-link..."
        />
        <label htmlFor="description"></label>
        <textarea
          id="description"
          name="description"
          required
          onChange={updateValues}
          value={formData.description}
          placeholder="Description"
        />
        <button type="submit">Add project</button>
      </form>
    </>
  );
}
