import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar fixed-top navbar-expand-md navbar-dark  ${styles.navtop}`}
    >
      <div className="container-xxl mx-5">
        <a href="#" className="navbar-brand">
          <span className="fw-bold" style={{ color: "#df87fa" }}>
            Chris Ge
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#AboutMe">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Cat Pics">
                Cat Pics
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
