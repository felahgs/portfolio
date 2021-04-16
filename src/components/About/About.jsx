import React, { useEffect } from "react";
import { calculateAge, hello } from "../../utils/dates";
import "./style.css";

const infoList = {
  Name: "Felipe Garcia de Souza",
  Age: calculateAge("12/02/1993"),
  Location: "Curitiba - PR, Brazil",
  "e-mail": "fgsouza93@gmail.com",
  Phone: "55 (41) 99984-3133",
};

const About = () => {
  useEffect(() => {
    console.log("component rendered");
    console.log(hello);
  }, []);

  return (
    <div>
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="img-thumb wow fadeInLeft" data-wow-delay="0.3s">
                {/* <img
                  className="img-fluid"
                  src="assets/img/about/about-1.jpg"
                  alt=""
                /> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div
                className="profile-wrapper wow fadeInRight"
                data-wow-delay="0.3s"
              >
                <h3>Hi Guys!</h3>
                <p>
                  Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et
                  rutrum eleifend sollicitudin lacinia justo id turpis. Nec
                  convallis integer. Odio eget duis. Nulla aenean et. Blandit
                  varius sollicitudin. Pellentesque leo primis neque urna
                  magnis. Elit ut sollicitudin. Et est a nam dolores eget itaque
                  sagittis et parturient duis est eleifend sociis rutrum odio
                  viverra integer.
                </p>
                <div className="about-profile">
                  <ul className="admin-profile">
                    {Object.entries(infoList).map(([key, value]) => (
                      <li key={key}>
                        <span className="pro-title">{key}</span>
                        <span className="pro-detail">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="btn btn-common">
                  <i className="icon-paper-clip"></i> Download Resume
                </a>
                <a href="#" className="btn btn-danger">
                  <i className="icon-speech"></i> Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
