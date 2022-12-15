import React from "react";
import NavBar from "../components/Home/NavBar";
import Aply from "../components/Home/Aply";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Bonus from "../components/Home/Bonus";
import Colab from "../components/Home/Colab";
import Footer from "../components/Home/Footer";
import HowWork from "../components/Home/HowWork";
import Meet from "../components/Home/Meet";
import Need from "../components/Home/Need";
import Numbers from "../components/Home/Numbers";
import Personal from "../components/Home/Personal";
import Quoter from "../components/Home/Quoter";
import { Link } from "react-router-dom"; // nos permite crear el link para redirigirse a la pagina correspondiente
const Home = () => {
  return (
    <div>
      <NavBar />
      <Quoter />
      <HowWork />
      <About />
      <Services />
      <Personal />
      <Need />
      <Meet />
      <Bonus />
      <Numbers />
      <Colab />
      <Aply />
      <Footer />
    </div>
  );
};

export default Home;
