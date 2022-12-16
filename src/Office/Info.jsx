import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>AUTONO DIGITAL</h1>
            <h2>
              Desarrollamos una aplicación para que cada vehículo conduzca y
              actúe con autonomía, a partir de datos en tiempo real y en función
              de la situación.
            </h2>
          </Col>
          <Col></Col>
          <Col>
            <img src="" alt="carro" />
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
            <h1>CIBERSEGURIDAD AVANZADA</h1>
            <h2>
              Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente. En este espacio puedes contar tu
              historia y permitir que los usuarios sepan más sobre ti.
            </h2>
          </Col>
          <Col></Col>
          <Col>
            <h1>ASEGURAMOS UN SERVICIO A LA MEDIDA DE TUS NECESIDADES</h1>
            <h2>
              INFORMACIÓN EN TIEMPO REAL Párrafo. Haz clic aquí para agregar tu
              propio texto y editarlo. Es fácil. Haz clic en "Editar texto" o
              doble clic aquí para agregar tu contenido y cambiar la fuente. En
              este espacio puedes contar tu historia y permitir que los usuarios
              sepan más sobre ti.
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
