import React, { useEffect } from "react";
// import sitatexOn from "../../assets/img/projects/sita.png";
// import serviceCentral from "../../assets/img/projects/service_central.png";
// import corvalent from "../../assets/img/projects/corvalent.png";
// import wwp from '../../assets/img/projects/wwp.png';
import metaurPic from "../../assets/gifs/met-pic.gif";
import metaurWalk from "../../assets/gifs/met-walk.gif";
import "./style.css";

const Portifolio = () => {
  useEffect(() => {
    // console.log(process.env.PUBLIC_URL);
    debugger;
  }, []);

  return (
    <section id="portfolios" className="section-padding">
      {/* <!-- Container Starts --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title" data-wow-delay="0.4s">
              Some things I made
            </h2>
            <p style={{ textAlign: "center", fontSize: " 20px" }}>
              {
                "Oops, tha page isn't ready yet. Check back later and I might have something cool to show."
              }
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img className="mettaur mettaur-walk" src={metaurWalk} alt="" />
            {/* <img
              style={{ transform: "scaleX(-1)", animationDirection: "reverse" }}
              className="mettaur mettaur-walk"
              src={metaurWalk}
              alt=""
            /> */}
            <div className="d-flex container-fluid justify-content-around">
              <img className="mettaur mettaur-pic " src={metaurPic} alt="" />
              <img
                style={{ transform: "scaleX(-1)" }}
                className="mettaur mettaur-pic "
                src={metaurPic}
                alt=""
              />
              {/* <a className="filter active " data-filter="all">
                <img
                  className="project-image"
                  src={sitatexOn}
                  alt="SITA company logo"
                />
              </a>
              <a className="filter active" data-filter="all">
                <img
                  className="project-image"
                  src={serviceCentral}
                  alt="Service Central company logo"
                />
              </a>
              <a className="filter active project-image" data-filter="all">
                <img
                  className="project-image"
                  src={corvalent}
                  alt="Corvalent company logo"
                />
              </a>
              <a className="filter active project-image" data-filter="all">
                <img
                  className="project-image"
                  src={corvalent}
                  alt="Corvalent company logo"
                />
              </a> */}
            </div>
          </div>
          {/* <!-- Portfolio Recent Projects --> */}
        </div>
      </div>
      {/* <!-- Container Ends --> */}
    </section>
  );
};

export default Portifolio;
