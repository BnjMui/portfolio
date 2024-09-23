import { ChangeEvent, FormEvent, useState } from "react";

type ContactProps = {
  email: string;
};
export default function Contact({ email }: ContactProps) {
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

  return (
    <>
      <button
        type="button"
        onClick={() => {
          alert(email);
        }}
      >
        Vis e-post
      </button>
      <form onSubmit={handleSubmit}>
        <pre>{JSON.stringify({ name, message })}</pre>

        <label htmlFor="message">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          placeholder="Name..."
          onChange={handleChange}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          value={message}
          placeholder="Write your message here..."
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
