import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateProject({
  updateProject,
}: {
  updateProject: Function;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : e.target.name === "category"
      ? setCategory(e.target.value)
      : setDescription(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;
    updateProject({
      title: title,
      description: description,
      category: category,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <h2>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        <pre>{JSON.stringify({ title, description })}</pre>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="category">Category: </label>
        <input
          type="text"
          id="category"
          name="category"
          value={category}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
