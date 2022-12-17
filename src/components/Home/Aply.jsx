import React from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

const Aply = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>CARRERAS</h1>
            <p>
              Buscamos talentos innovadores para nuestro equipo. Ve todos los
              puestos y envia tu CV
            </p>
            <Button variant="dark">Vacantes</Button>
          </Col>
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=First slide&bg=373940"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Button variant="dark">Aplica ahora</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aply;
