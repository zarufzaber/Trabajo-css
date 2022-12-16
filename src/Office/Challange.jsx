import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Challange = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>EL RETO: GESTIONAR CONTIGO TUS ENTREGAS LOGISTICAS</h1>
            <h2>
              Puedes cotizar de forma independiente entre los operadores del
              mercado, o buscar con nosotros todas las opciones y quedarte con
              el operador que mejor se adecúe a tus necesidades de transporte
            </h2>
          </Col>
          <Col>
            <img src="" alt="laptop" />
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <h1>DISEÑADO PARA LAS EMPRESAS DIGITALES</h1>
            <h2>
              Nuestra plataforma está diseñada para poder gestionar tu logística
              desde un solo lugar, tener todos los alcances necesarios para un
              correcto sistema de gestión logístico. Nuestras soluciones abarcan
              la integración de API's para una comunicación directa entre
              plataformas.
            </h2>
          </Col>
          <Col></Col>
          <Col>
            <h1>ASEGURAMOS UN SERVICIO A LA MEDIDA DE TUS NECESIDADES</h1>
            <h2>
              Estamos constantemente a la búsqueda de más operadores logísticos,
              cada uno con una propuesta de valor única que permita coincidir
              con las necesidades de nuestros clientes, y así poder cotizar con
              la mejor opción de reparto.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Challange;
