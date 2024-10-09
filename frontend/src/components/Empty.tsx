type EmptyProps = {
  data: any;
  children: React.ReactNode;
};
export default function Empty({ data, children }: EmptyProps) {
  return (
    <>{!data || data.length === 0 ? <p>No data in the list</p> : children}</>
  );
}
