import useContact from "../hooks/useContact";
type ContactProps = {
  email: string;
};
export default function Contact({ email }: ContactProps) {
  const { handleChange, handleSubmit, name, message } = useContact();
  return (
    <>
      <h2>Ta kontakt her</h2>
      <button
        className="email"
        type="button"
        onClick={() => {
          alert(email);
        }}
      >
        Vis e-post
      </button>
      <form onSubmit={handleSubmit}>
        {/* <pre>{JSON.stringify({ name, message })}</pre> */}

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
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
