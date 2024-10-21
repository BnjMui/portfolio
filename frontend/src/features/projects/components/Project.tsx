import { ReactNode } from "react";

export default function Project({ children }: { children: ReactNode }) {
  return (
    <>
      <article>{children}</article>
    </>
  );
}
