import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.Mode === "light" ? "black" : "white"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            {props.mode === "light" ? (
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckDefault"
                style={{ color: "black", fontStyle: "bold" }}
              >
                Enable dark mode
              </label>
            ) : (
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckDefault"
                style={{ color: "azure" }}
              >
                Enable light mode
              </label>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
// this is not neccesary it will run even without it
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Textutils",
};
