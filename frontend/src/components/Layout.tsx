import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { student } from "../configs/student";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
        <Header
          student={student.studentName}
          degree={student.degree}
          points={student.points}
        />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
