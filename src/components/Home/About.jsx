import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import host from "../../utils/pexels-mikhail-nilov-6969972_edited.jpg";
import "../../assets/styles/About.css";
const About = () => {
  return (
    <div className="container-2">
      <Container fluid>
        <Row>
          <Col>
            <h1>PLATAFORMA DE LOGISTICA INTEGRAL</h1>
            <strong>Somos COBOX</strong>
            <h2>
              Somos el soporte para la gestion de tus entregas, cotiza en tiempo
              real
            </h2>
            <p>
              Queremos que la experiencia de las entregas sean más sencillas
              para las personas y las empresas, gestionando según sus
              preferencias, la mejor opción de forma única para cada pedido de
              manera individual.
            </p>
          </Col>
          <Col>
            <img className="repartidor" src={host} alt="imagen" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
