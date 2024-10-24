import useForm from "../hooks/useForm";

export default function CreateProject() {
  const {
    title,
    description,
    category,
    url,
    status,
    tags,
    isPublic,
    publicText,
    handleChange,
    handleSubmit,
    handleCheckboxChange,
  } = useForm();
  return (
    <>
      <pre>{JSON.stringify(tags)}</pre>
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
        <label htmlFor="status">Status: </label>
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={handleChange}
        />
        <label htmlFor="tags">Tags: </label>
        <input
          placeholder="tag1, tag2, tag3......"
          type="text"
          id="tags"
          name="tags"
          value={tags.join(",").split(" ", 1)}
          onChange={handleChange}
        />
        <label htmlFor="visibility">
          Do you want to make this project public?
        </label>
        <input
          type="checkbox"
          id="visibility"
          checked={isPublic}
          onChange={handleCheckboxChange}
        />{" "}
        <p>Project is currently set to: {publicText}</p>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
