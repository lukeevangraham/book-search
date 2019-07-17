import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button> */}

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
      <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books
      </Link>
          <li className="nav-item active">
          <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Search
      </Link>
          </li>
          <li className="nav-item">
            <Link
            to="/saved"
            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
            Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
