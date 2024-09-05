const Experiences = ({ experienceOne, experienceTwo }) => (
  <div>
    <Experience description={experienceOne} />
    <Experience description={experienceTwo} />
  </div>
);

const Experience = ({ description }) => (
  <>
    <p>{description}</p>
  </>
);

export default Experiences;
