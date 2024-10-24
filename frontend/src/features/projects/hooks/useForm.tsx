import { ChangeEvent, FormEvent, useState } from "react";
import useProjects from "./useProjects";

export function useForm() {
  const { update } = useProjects();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [publicText, setPublicText] = useState<string>("Private");
  const [status, setStatus] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "url":
        setUrl(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      case "tags":
        setTags(e.target.value.split(","));
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsPublic(e.target.checked);
    setPublicText(e.target.checked ? "Public" : "Private");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !description)
      return alert("Projects title/description is required");
    update({
      title: title,
      description: description,
      url: url,
      category: category,
      public: isPublic,
    });
    setTitle("");
    setCategory("");
    setDescription("");
    setUrl("");
  };
  return {
    title,
    description,
    category,
    url,
    isPublic,
    publicText,
    status,
    tags,
    handleChange,
    handleCheckboxChange,
    handleSubmit,
  };
}

export default useForm;
