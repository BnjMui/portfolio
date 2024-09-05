const Header = ({ student, degree, points }) => (
  <>
    <h1>{student}</h1>
    <p>
      {degree} {points} studiepoeng
    </p>
  </>
);

export default Header;
