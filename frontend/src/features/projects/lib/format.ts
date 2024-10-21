import { format } from "date-fns";

export function FormatedDate(createdAt: string): string {
  return format(new Date(createdAt), "dd. MMM, yyyy");
}
