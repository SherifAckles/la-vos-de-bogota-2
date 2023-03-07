import { Navbar } from "react-bootstrap";
import LogoImage from "../../images/logo.svg";

function Logo() {
  return (
    <Navbar.Brand href="/">
      <img
        src={LogoImage}
        style={{ maxWidth: "100%" }}
        className="d-inline-block align-top header-logo"
        alt="La Vos de Bogota"
      />
    </Navbar.Brand>
  );
}

export default Logo;
