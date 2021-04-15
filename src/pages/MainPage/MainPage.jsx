import React from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Portifolio from "../../components/Portifolio/Portifolio";
import Resume from "../../components/Resume/Resume";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Portifolio />
      <Resume />
      <Contact />
      <Footer />

      {/* TODO <!-- Go to Top Link --> */}
      <a href="#" className="back-to-top">
        <i className="icon-arrow-up"></i>
      </a>

      {/* <!-- jQuery first, then Popper.js, then Bootstrap JS --> */}
      {/* <script src="assets/js/jquery-min.js"></script>
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.mixitup.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/waypoints.min.js"></script>
        <script src="assets/js/wow.js"></script>
        <script src="assets/js/jquery.nav.js"></script>
        <script src="assets/js/jquery.easing.min.js"></script>  
        <script src="assets/js/nivo-lightbox.js"></script>
        <script src="assets/js/jquery.slicknav.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/form-validator.min.js"></script>
        <script src="assets/js/contact-form-script.min.js"></script>
        <script src="assets/js/map.js"></script> */}
    </div>
  );
};

export default MainPage;
