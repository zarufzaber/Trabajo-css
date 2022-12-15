import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Numbers = () => {
  return (
    <div>
      <div>
        <img src="" alt="img-entrega" />
      </div>
      <div>
        <div>
          <Container>
            <Row>
              <Col>
                <h1>Cobox en numeros</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                +12K
                <img src="" alt="percent" />
                <p>ENVIOS REALIZADOS</p>
              </Col>
              <Col>
                +10
                <img src="" alt="percent" />
                <p>OPERADORES LOGISTICOS</p>
              </Col>
            </Row>

            <Row>
              <Col>
                +s/120K
                <img src="" alt="percent" />
                <p>AHORRADOS</p>
              </Col>
              <Col>
                +1200
                <img src="" alt="percent" />
                <p>USUARIOS DIARIOS</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
