import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi : </h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>26 allée baptistin richelme, 83500 La Seyne Sur Mer</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0616369919">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro de téléphone copié ! ");
                  }}
                >
                  06 16 36 99 19
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="lukedussart@hotmail.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié ! ");
                  }}
                >
                  lukedussart@hotmail.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.facebook.com/luke.dussart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Facebook</h4>
              <i className="fab fa-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/luke-dussart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/DUSSARTLuke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
