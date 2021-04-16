import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/dussartluke.jpg" alt="profil-pic" />
          <h3> DUSSART Luke</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home" />
              <span> Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain" />
              <span> Mes compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projets" activeClassName="navActive">
              <i className="fas fa-images" />
              <span> Mes projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book" />
              <span> Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/luke.dussart"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luke-dussart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DUSSARTLuke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>DUSSART Luke - 2021</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
