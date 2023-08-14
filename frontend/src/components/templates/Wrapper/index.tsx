import { ReactNode } from "react";
import { Header } from "../../organisms/Header";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <div id="wrapper" className="container p-5 mt-3 position-relative">
    <Header title="TNT Village Forever" subtitle="Scambio Etico" />
    <main className="container">{children}</main>
  </div>
);

