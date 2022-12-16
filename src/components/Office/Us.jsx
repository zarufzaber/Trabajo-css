import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles/us.css"
const Us = () => {
  return (
    <div className="w-screen">
      <div className="contenedor w-full">
        <div className="us_textos">
          <div className="us_texto_1">Nuestra Propuesta</div>
          <div className="us_texto_2">Una logística inteligente es una logística sostenible y económica.</div>
        </div>
        <img src="\src\components\Office\resources\imagen_2.png" className="us_fondo"></img>
      </div>
    </div>
  );
};

export default Us;
