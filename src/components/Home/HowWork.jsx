import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import send from "../../utils/entrega-a-domicilio.png";
import register from "../../utils/registro.png";
import choose from "../../utils/escoger.png";
import "../../assets/styles/HowWork.css";
const HowWork = () => {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col>¿Como funciona nuestro servicio?</Col>
        </Row>
        <Row>
          <Col>
            <img src={register} alt="computer" />
          </Col>
          <Col>
            <img src={choose} alt="selection" />
          </Col>
          <Col>
            <img src={send} alt="send" />
          </Col>
        </Row>
        <Row>
          <Col>
            <span>1.</span> Realiza tu registro completo
          </Col>
          <Col>
            <span>2.</span> Selecciona el mejor servicio
          </Col>
          <Col>
            <span>3.</span> Nosotros gestionamos tu envio
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowWork;
