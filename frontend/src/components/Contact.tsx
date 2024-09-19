type ContactProps = {
  email: string;
};
export default function Contact({ email }: ContactProps) {
  return (
    <>
      <p>{email}</p>
    </>
  );
}
