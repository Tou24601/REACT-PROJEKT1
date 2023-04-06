import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div id="footerText">
          Nazwa firmy – wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="logos">
          <FontAwesomeIcon icon={faInstagram} className="logo" />
          <FontAwesomeIcon icon={faFacebookSquare} className="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
