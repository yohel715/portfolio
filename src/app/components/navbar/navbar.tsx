'use client'

import React from 'react';

export default function Navbar() {
  const handleNavLinkClick = (event: React.MouseEvent) => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      (event.target as HTMLElement).classList.remove("active");
    });
    (event.target as HTMLElement).classList.add("active");
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a href=".">
          <span className="brand">
            {/* <img src={logo} height="30" classNameName="d-inline-block" alt="logo" /> */}
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" onClick={handleNavLinkClick}>
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavLinkClick}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleNavLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
