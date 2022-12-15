import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Vacancies = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>VACANTES DE EMPLEO</h1>
            <h2>Cambiar el futuro del transporte, implica pensar diferente.</h2>
            <p>
              Párrafo. Haz clic aquí para agregar tu propio texto y editarlo. Es
              fácil. Haz clic en "Editar texto" o doble clic aquí para agregar
              tu contenido y cambiar la fuente. En este espacio puedes contar tu
              historia y permitir que los usuarios sepan más sobre ti.
            </p>
          </Col>
          <Col></Col>
          <Col>
            <img src="" alt="car" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>INGENIERO ELÉCTRICO</Card.Title>
                <Card.Text>Guadalajara, Jal.</Card.Text>
                <Card.Text>
                  Párrafo. Haz clic aquí para agregar tu propio texto y editar.
                  Es fácil. Haz clic en "Editar texto" o doble clic aquí para
                  agregar tu contenido y cambiar la fuente.
                </Card.Text>
                <Button href="#/courier/ingeniero-electrico" variant="primary">
                  Aplica ahora
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>CIENTIFICO DE DATOS</Card.Title>
                <Card.Text>Guadalajara, Jal.</Card.Text>
                <Card.Text>
                  Párrafo. Haz clic aquí para agregar tu propio texto y editar.
                  Es fácil. Haz clic en "Editar texto" o doble clic aquí para
                  agregar tu contenido y cambiar la fuente.
                </Card.Text>
                <Button variant="primary">Aplica ahora</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>INVESTIGADOR DE INTELIGENCIA ARTIFICIAL</Card.Title>
                <Card.Text>Guadalajara, Jal.</Card.Text>
                <Card.Text>
                  Párrafo. Haz clic aquí para agregar tu propio texto y editar.
                  Es fácil. Haz clic en "Editar texto" o doble clic aquí para
                  agregar tu contenido y cambiar la fuente.
                </Card.Text>
                <Button variant="primary">Aplica ahora</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>INGENIERO EN ROBÓTICA</Card.Title>
                <Card.Text>Guadalajara, Jal.</Card.Text>
                <Card.Text>
                  Párrafo. Haz clic aquí para agregar tu propio texto y editar.
                  Es fácil. Haz clic en "Editar texto" o doble clic aquí para
                  agregar tu contenido y cambiar la fuente.
                </Card.Text>
                <Button variant="primary">Aplica ahora</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <Card.Title>
                  ¿No encontraste el puesto que buscabas? Envíanos tu CV
                </Card.Title>
                <Button variant="primary">Enviar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Vacancies;
