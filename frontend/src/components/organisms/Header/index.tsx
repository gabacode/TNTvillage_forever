import headBanner from "../../../assets/images/loghino.gif";

interface Props {
  title: string;
  subtitle?: string;
}

export const Header = ({ title, subtitle }: Props) => (
  <header className="position-absolute top-0 start-0 w-100 d-flex align-items-center">
    <div className="container d-flex align-items-center">
      <a href="/" className="text-decoration-none">
        <img src={headBanner} alt="TNT Village" />
      </a>
      <div className="ms-3">
        <h1 className="h4 fw-bold mb-0">{title}</h1>
        <p className="mt-0 h6 fw-bold">{subtitle}</p>
      </div>
    </div>
  </header>
);

