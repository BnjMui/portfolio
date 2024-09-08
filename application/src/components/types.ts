import { ReactNode } from "react";

export interface FormData {
  id?: number;
  name: string;
  category?: string;
  url?: string;
  description: string;
}
export interface PropChildren {
  children: ReactNode;
}
