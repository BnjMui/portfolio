import { ChangeEvent, FormEvent, useState } from "react";

export function useContact() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.target.name === "name"
      ? setName(e.target.value)
      : setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    console.log(`Message has been sendt by:\t${name}\nMessage:\t${message}`);
    setName("");
    setMessage("");
  };

  return { handleChange, handleSubmit, name, message };
}

export default useContact;
