import React from "react";

const navLinks = [
  { label: "Home", href: "#hero-area" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#portfolios" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}

          <div className="navbar-header">
            <a href="index.html" className="navbar-brand">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
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
        {/* <!-- Mobile Menu Start --> */}
        <ul className="onepage-nev mobile-menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#resume">resume</a>
          </li>
          <li>
            <a href="#portfolio">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/* <!-- Mobile Menu End --> */}
      </nav>
    </div>
  );
};

export default Navbar;
