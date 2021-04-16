import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h2>
          Vous avez essayé de passer par un chemin non autorisé, veuillez
          revenir en lieu sûr !
        </h2>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span> Acceuil </span>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
