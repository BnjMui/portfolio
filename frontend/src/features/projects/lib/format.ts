import { format } from "date-fns";
import { nb } from "date-fns/locale";

export function FormatedDate(createdAt: string): string {
  return format(new Date(createdAt), "dd. MMM, yyyy");
}
