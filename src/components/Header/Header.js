import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
        <Navbar/>
      {/* <!-- Header Area wrapper Starts --> */}
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
                    Tom Saulnier
                  </h2>
                  <p className="script-font wow fadeInUp" data-wow-delay="0.6s">
                    Front-end Web Developer and Graphic Designer
                  </p>
                  <ul
                    className="social-icon wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <li>
                      <a className="facebook" href="#">
                        <i className="icon-social-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="twitter" href="#">
                        <i className="icon-social-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="instagram" href="#">
                        <i className="icon-social-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#">
                        <i className="icon-social-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="google" href="#">
                        <i className="icon-social-google"></i>
                      </a>
                    </li>
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
        {/* <!-- Hero Area End --> */}
      </header>
      {/* <!-- Header Area wrapper End --> */}
    </>
  );
};

export default Header;
