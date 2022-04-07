import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/whiteLogo.svg";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const navLinks = [
    { text: "Home", route: "#home" },
    { text: "About", route: "#about" },
    { text: "Projects", route: "#projects" },
    { text: "Studies", route: "#studies" },
    { text: "Skills", route: "#skills" },
    { text: "Contact", route: "#contact" },
  ];

  // Responsive menu
  const [isOpen, setIsOpen] = useState(false);
  // Change navbar color after scrolling
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 200) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  // Change color current section
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLink = (index) => {
    setActiveLink(index);
    setIsOpen(!isOpen);
  };
  return (
    <nav className={colorChange ? "color-change--nav" : "nav"}>
      <img className="nav__logo" src={logo} alt="Logo" />
      <div className={`nav__items ${isOpen && "open"}`}>
        {navLinks.map((link, index) => {
          return (
            <HashLink
              smooth
              to={link.route}
              key={index}
              onClick={() => handleNavLink(index)}
              className={
                activeLink === index ? "nav__item active" : "nav__item"
              }
            >
              {link.text}
            </HashLink>
          );
        })}
      </div>
      <div
        className={`nav__toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
  );
};
