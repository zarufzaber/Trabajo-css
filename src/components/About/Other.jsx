import React from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

const Other = () => {
  return (
    <div>
      <h1>Otros articulos relacionados</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Container>
        <Row>
          <Col>
            <h1>NOTICIAS</h1>
            <p>Cobox en prensa</p>
          </Col>
          <Col>
            <p>Muchos canales y empresas ya estan hablando de nosotros</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <img src="" alt="RCR" />
          </Col>
          <Col>
            <img src="" alt="TB" />
          </Col>
          <Col>
            <img src="" alt="BINANCE" />
          </Col>
          <Col>
            <img src="" alt="PALO ALTO" />
          </Col>
          <Col>
            <img src="" alt="LONDON POST" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Other;
