import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/us.css"
const Us = () => {
  return (
    <div className="">
      <div className=" bg-scroll off_us_img_1 bg-center bg-cover w-auto h-96 lg:off_us_img_3"></div>
      <div className="bg-black w-auto h-auto bg-opacity-50 ml-5 mr-5 -mt-80">
        <div className=" text-xs"><br></br></div>
        <div className="bg-opacity-100 text-white ml-3 text-3xl font-light">Nuestra Propuesta</div>
        <div className=" text-sxs"><br></br></div>
        <div className="font-bold bg-opacity-100 text-white ml-3 text-left text-ssx ">Una logística inteligente es una logística sostenible y económica.</div>
        <div className=" text-xs"><br></br></div>
      </div>
      <div className="bg-cover off_us_img_2 w-80 h-16 ml-12 mr-20 mt-3">
      </div>
      
    </div>
  );
};

export default Us;
