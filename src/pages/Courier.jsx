import React from "react";
import NavBar from "../components/Home/NavBar";
import Header from "../components/Courier/Header";
import Location from "../components/Courier/Location";
import Vacancies from "../components/Courier/Vacancies";
import Footer from "../components/Home/Footer";

const Courier = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Location />
      <Vacancies />
      <Footer />
    </div>
  );
};

export default Courier;
