import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './styles/Boos.css'


const Boos = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>

            <div className="titulo_1">
              <p>JAIME POLO - CEO & FOUNDER</p>
            </div>

            <div className="titulo_2">
              <p>Redefiniendo la forma de hacer envios</p>
            </div>

            <div className="texto_1">

              <p>
              Muchos canales de atención, muchas personas de contacto para tener
              muchos operadores, es la realidad de muchas empresas que deben de
              gestionar la mejor forma de hacer envíos con prioridades
              diferentes para cada uno de éstos.
              </p>
              <p>
              Trabajamos desde la aplicación de la tecnología para facilitar
              este proceso en una sola plataforma que permita ayudarte a
              realizar envíos, gestionar tus entregas y visualizar tus más
              importantes indicadores de gestión.
              </p>
            </div>
            
          </Col>
          <Col>
            <div className="imagen_1"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Boos;
