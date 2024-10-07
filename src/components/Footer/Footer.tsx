import { Link } from "react-router-dom";
import { FOOTER_LIST } from "../../config/config";
import Container from "../Container/Container";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        {FOOTER_LIST.map((item) => (
          <Link key={item.link} to={item.link} className="footer__item">{item.name}</Link>
        ))}
      </Container>
    </footer>
  );
};

export default Footer;
