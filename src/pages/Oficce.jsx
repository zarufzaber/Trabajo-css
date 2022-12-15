import React from "react";
import NavBar from "../components/Home/NavBar";
import Challange from "../components/Office/Challange";
import ChargeAll from "../components/Office/ChargeAll";
import Info from "../components/Office/Info";
import ServiceForOffice from "../components/Office/ServiceForOffice";
import Title from "../components/Office/Title";
import Us from "../components/Office/Us";
import Footer from "../components/Home/Footer";

const Oficce = () => {
  return (
    <div>
      <NavBar />
      <Title />
      <Us />
      <ServiceForOffice />
      <ChargeAll />
      <Challange />
      <Info />
      <Footer />
    </div>
  );
};

export default Oficce;
