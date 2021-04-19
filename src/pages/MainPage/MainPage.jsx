import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Portifolio from "../../components/Portifolio/Portifolio";
import Resume from "../../components/Resume/Resume";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar />
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
    </div>
  );
};

export default MainPage;
