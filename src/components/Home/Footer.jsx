import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <img src="" alt="Cobox" />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Contacto</p>
              </Col>
              <Col>
                <p>Tel: +51 914 327 463</p>
                <p>Email: inbox@coboxlogistic.com</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <h1>SUSCRIBETE</h1>
            <p>
              Registrate y recibe noticias de Cobox. Siempre tenemos novedades
              para nuestros clientes y partners Logisticos
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Ingresa un email" />
                <Form.Text className="text-muted">
                  Gracias por suscribirte
                </Form.Text>
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <footer>
        <Container>
          <Row>
            <Col>
              <span>© 2022 Creado por </span>
              <img src="" alt="Cobox" />
              <span> by Ronquillo</span>
            </Col>
            <Col>
              <img src="" alt="Linkedin" />
              <img src="" alt="Facebook" />
              <img src="" alt="Twitter" />
              <img src="" alt="Instagram" />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
