import { useState } from "react";

export default function Contact({ student }) {
  const [form, setForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [text, setText] = useState<string>("");

  const formTrigger = () => {
    setForm(true);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !text) {
      alert("Name and text can`t be empty!");
    }
    alert(`Message sendt with name: ${name}. And message: ${text}`);
    setName("");
    setText("");
  };

  // const handleChange = (input: string) => {
  //   input === "name" ? setName((prev)=> prev)
  // };
  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);
  return (
    <>
      <button
        onClick={() => {
          formTrigger();
          {
            alert(student.email);
          }
        }}
      >
        Klikk her for kontaktinformasjon
      </button>
      {/* <pre>{JSON.stringify({ name, text }, null, 2)}</pre> */}
      {!form ? null : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Navn: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={updateName}
          />
          <label htmlFor="text">Melding: </label>
          <textarea
            typeof="text"
            id="text"
            name="text"
            value={text}
            onChange={updateText}
          />
          <button type="submit">Send melding</button>
        </form>
      )}
    </>
  );
}
