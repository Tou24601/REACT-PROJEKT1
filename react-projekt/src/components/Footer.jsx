import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const Footer = ({}) => {
  return (
    <footer>
      <div className="container footer">
        <div id="footerText">
          Nazwa firmy – wszelkie prawa zastrzeżone, 2019
        </div>
        <div className="logos">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="logo" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookSquare} className="logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
