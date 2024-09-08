import { PropChildren } from "./types";

const Experiences: React.FC<PropChildren> = ({ children }) => (
  <div>
    <h2>Erfaringer</h2>
    <section>{children}</section>
  </div>
);

export default Experiences;
