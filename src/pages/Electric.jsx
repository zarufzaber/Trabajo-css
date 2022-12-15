import React from "react";
import NavBar from "../components/Home/NavBar";
import PrimaryScreen from "../components/Vacancies/PrimaryScreen";
import WhoAreYou from "../components/Vacancies/WhoAreYou";
import WorkMe from "../components/Vacancies/WorkMe";
import Footer from "../components/Home/Footer";

const Electric = () => {
  return (
    <div>
      <NavBar />
      <PrimaryScreen />
      <WorkMe />
      <WhoAreYou />
      <Footer />
    </div>
  );
};

export default Electric;
