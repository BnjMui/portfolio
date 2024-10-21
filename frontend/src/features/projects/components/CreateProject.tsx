import { ChangeEvent, FormEvent, useState } from "react";

export default function CreateProject({
  updateProject,
}: {
  updateProject: Function;
}) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.name === "title"
      ? setTitle(e.target.value)
      : e.target.name === "category"
      ? setCategory(e.target.value)
      : e.target.name === "description"
      ? setDescription(e.target.value)
      : setUrl(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description)
      return alert("Projects title/description is required");
    updateProject({
      title: title,
      description: description,
      url: url,
      category: category,
    });
    setTitle("");
    setCategory("");
    setDescription("");
    setUrl("");
  };
  return (
    <>
      <h2>Create a new project</h2>
      <form onSubmit={handleSubmit}>
        {/* <pre>{JSON.stringify({ title, description })}</pre> */}
        <label htmlFor="title">Title: </label>
        <input
          required
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <label htmlFor="url">Url: </label>
        <input
          type="url"
          id="url"
          name="url"
          value={url}
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
        <textarea
          required
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
