import React from "react";
import "./style.css";

const navLinks = [
  { label: "Home", href: "#hero-area" },
  { label: "About", href: "#about" },
  // { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#portfolios" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
      <div className="container">
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-center clearfix">
            {navLinks.map((item, idx) => (
              <li
                key={item.label + idx}
                className={`nav-item ${idx === 0 ? "active" : ""}`}
              >
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* TODO create mobile responsive menu */}
    </nav>
  );
};

export default Navbar;
