import React from "react";
import Boos from "../components/About/Boos";
import Journey from "../components/About/Journey";
import Other from "../components/About/Other";
import Time from "../components/About/Time";
import NavBar from "../components/Home/NavBar";
import Footer from "../components/Home/Footer";
const About = () => {
  return (
    <div>

      <NavBar />
      <Journey />
      <Boos />
      <Time />
      <img src="" alt="img" />
      <Other />
      <Footer />
    </div>
  );
};

export default About;
