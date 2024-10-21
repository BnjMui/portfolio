import { PropsWithChildren } from "react";

type EmptyProps = {
  data: any;
};
export default function Empty({
  data,
  children,
}: PropsWithChildren<EmptyProps>) {
  return (
    <>{!data || data.length === 0 ? <p>No data in the list</p> : children}</>
  );
}
