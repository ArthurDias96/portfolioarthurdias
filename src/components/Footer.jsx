import { FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p>
            Feito com <FaHeart className="footer__heart" /> por{" "}
            <strong>Arthur Dias</strong>
          </p>
          <p className="footer__copyright">
            © {currentYear} Arthur Dias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

