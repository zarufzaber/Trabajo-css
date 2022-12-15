import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PrimaryScreen = () => {
  return (
    <div>
      <h1>INGENIERO ELECTRICO</h1>
      <p>
        Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
        fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu
        contenido y cambiar la fuente. En este espacio puedes contar tu historia
        y permitir que los usuarios sepan más sobre ti.
      </p>
      <Container>
        <Row>
          <Col sm={2}></Col>
          <Col>
            <h1>UBICACION</h1>
            <h2>Guadalajara</h2>
          </Col>
          <Col></Col>
          <Col>
            <h1>TIPO DE EMPLEO</h1>
            <h2>Permanente</h2>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default PrimaryScreen;
