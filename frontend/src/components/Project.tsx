// type ProjectType = {
//   id: number | string;
//   title: string;
//   description?: string;
// };

import { PropChildren } from "./types";

export default function Project({ children }: PropChildren) {
  return <article>{children}</article>;
}
