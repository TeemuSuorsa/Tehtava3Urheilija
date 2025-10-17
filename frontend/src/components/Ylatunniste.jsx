import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Ylatunniste = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Etusivu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/urheilija/lisaa" className="nav-link">
                Lisää urheilija
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Ylatunniste.propTypes = {
  turvataso: PropTypes.string.isRequired,
};

export default Ylatunniste;
