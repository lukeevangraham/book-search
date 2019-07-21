import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Google Books
          </Link>
          <li className="nav-item active">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
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
