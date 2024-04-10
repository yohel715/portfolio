"use client";

import React, { useState, useEffect } from "react";
import { addClassOnScroll } from "../utils/scrollUtils";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {

  addClassOnScroll("nav-scrolled", 300, ".navbar");

  const [activeNavItem, setActiveNavItem] = useState("about");

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg nav"
      id="navbar"
      fixed="top"
    >
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              data-to-scrollspy-id="about"
              onClick={() => setActiveNavItem("about")}
            >
              About me
            </Nav.Link>
            <Nav.Link
              href="#skills"
              data-to-scrollspy-id="skills"
              onClick={() => setActiveNavItem("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              data-to-scrollspy-id="experience"
              onClick={() => setActiveNavItem("experience")}
            >
              Experience
            </Nav.Link>
            {/* <Nav.Link
              href="#portfolio"
              data-to-scrollspy-id="portfolio"
              onClick={() => setActiveNavItem("portfolio")}
            >
              Portfolio
            </Nav.Link> */}
            <Nav.Link
              href="#contact"
              data-to-scrollspy-id="contact"
              onClick={() => setActiveNavItem("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div >
    </Navbar>
  );
}

export default Navigationbar;
