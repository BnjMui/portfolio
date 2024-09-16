import { ofetch } from "ofetch";
import { useEffect, useState } from "react";
type Project = {
  id: string | number;
  title: string;
  description: string;
  createdAt: Date;
  category: string;
};
export default function ServerData() {
  const [data, setData] = useState<Project[]>([]);
  const getServerData = async () => {
    const { projects } = await ofetch("http://localhost:3999/projects");
    setData(projects);
  };
  useEffect(() => {
    getServerData();
  }, []);

  return (
    <>
      {data?.map((e, index) => {
        return (
          <article key={index}>
            <h2>{e.title}</h2>
            <p>Description: {e.description}</p>
            <p>
              Created at {new Date(e.createdAt).toISOString().split("T")[0]}
            </p>
          </article>
        );
      })}
    </>
  );
}
