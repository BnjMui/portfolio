const Header = ({ student }) => (
  <>
    <h1>{student.name}</h1>
    <p>
      {student.degree} {student.points} studiepoeng
    </p>
  </>
);

export default Header;
