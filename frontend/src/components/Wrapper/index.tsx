import { ReactNode } from "react";
import headBanner from "../../assets/images/loghino.gif";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <div id="wrapper" className="container p-5 mt-3 position-relative">
    <header className="position-absolute top-0 start-0 w-100 d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <img src={headBanner} alt="TNT Village" />
        <div className="ms-3">
          <h1 className="h4 fw-bold mb-0">TNT Village Forever</h1>
          <p className="mt-0 h6 fw-bold">Scambio Etico</p>
        </div>
      </div>
    </header>
    <main className="container">{children}</main>
  </div>
);

