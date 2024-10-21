import "./styles/main.scss";
import Layout from "./components/Layout";
import { PropsWithChildren } from "react";

function App({ children }: PropsWithChildren) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}

export default App;
