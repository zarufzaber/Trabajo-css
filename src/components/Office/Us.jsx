import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Us = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm></Col>
          <Col sm></Col>
        </Row>
        <Row>
          <Col sm={8}>sm=true</Col>
          <Col sm={4}>
            <h1>Nuestra Propuesta</h1>
            <h2>
              Una logística inteligente es una logística sostenible y económica.
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm></Col>
          <Col sm>
            <img src="" alt="Cobox" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Us;
