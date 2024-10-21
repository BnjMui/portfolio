import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { student } from "@/configs/student";
import Experiences from "@/features/experience/components/Experiences";
import Empty from "./Empty";
import Experience from "@/features/experience/components/Experience";
import Contact from "@/features/contact/components/Contact";

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
      <main>
        <section>
          <Experiences>
            <Empty data={student.experiences}>
              {student.experiences.map((student: string) => (
                <Experience key={student} experience={student} />
              ))}
            </Empty>
          </Experiences>
        </section>
        <section>
          <Contact email={student.email} />
        </section>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
