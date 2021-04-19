import React, { useEffect } from "react";
// import sitatexOn from "../../assets/img/projects/sita.png";
// import serviceCentral from "../../assets/img/projects/service_central.png";
// import corvalent from "../../assets/img/projects/corvalent.png";
// import wwp from '../../assets/img/projects/wwp.png';
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
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          Projects I worked
        </h2>
        <div className="row">
          <div className="col-md-12">
            {/* <!-- Portfolio Controller/Buttons --> */}
            <div className="controls text-center project-image">
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
            {/* <!-- Portfolio Controller/Buttons Ends--> */}
          </div>
          {/* <!-- Portfolio Recent Projects --> */}
        </div>
      </div>
      {/* <!-- Container Ends --> */}
    </section>
  );
};

export default Portifolio;
