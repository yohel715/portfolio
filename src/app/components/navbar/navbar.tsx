"use client";

import React, { useState, useEffect } from "react";
import { addClassOnScroll } from "../utils/scrollUtils";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigationbar() {

  addClassOnScroll("nav-scrolled", 50, ".navbar");

  // Set active nav item
  const [activeNavItem, setActiveNavItem] = useState("home");

  // Array of navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-expand-lg nav"
      id="navbar"
    >
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                data-to-scrollspy-id={item.id}
                onClick={() => setActiveNavItem(item.id)}
                className={activeNavItem === item.id ? 'active-scroll-spy' : ''}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigationbar;
