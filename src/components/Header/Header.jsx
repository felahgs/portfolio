import React from "react";
import Navbar from "../Navbar/Navbar";

const socialLinks = [
  { label: "facebook", href: "#", class: "icon-social-facebook" },
  { label: "twitter", href: "#", class: "icon-social-twitter" },
  { label: "instagram", href: "#", class: "icon-social-instagram" },
  { label: "linkedin", href: "#", class: "icon-social-linkedin" },
  { label: "google", href: "#", class: "icon-social-google" },
];

const SocialLinksContainer = () =>
  socialLinks.map((link, idx) => (
    <li key={link.label + idx}>
      <a className={link.label} href={link.href}>
        <i className={link.class}></i>
      </a>
    </li>
  ));

const Header = () => {
  return (
    <>
      <Navbar />
      <header id="header-wrap">
        {/* <!-- Hero Area Start --> */}
        <div id="hero-area" className="hero-area-bg">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 text-center">
                <div className="contents">
                  <h5
                    className="script-font wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    Hi This is
                  </h5>
                  <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">
                    Felipe Souza
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    {"I'm a Front-end Software Developer"}
                  </p>
                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <SocialLinksContainer />
                  </ul>
                  <div
                    className="header-button wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <a href="#" className="btn btn-common">
                      Get a Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
