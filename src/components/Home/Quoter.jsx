import React from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../../assets/styles/Quoter.css";
import Button from "react-bootstrap/Button";
const Quoter = () => {
  return (
    <div className="section">
      <h1 className="header">
        Busca la <span className="header__special">mejor opción</span> para tus
        envios
      </h1>
      <div className="quoter">
        <Form>
          <p>¿Cual es tu prioridad? opcional</p>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              inline
              <Form.Check
                label="Precio"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Tiempo"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Calidad"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Form>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Origen">
              <Form.Control type="email" placeholder="Ciudad 1" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Destino">
              <Form.Control type="email" placeholder="Ciudad 2" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInputGrid" label="Tamaño">
              <Form.Control type="email" placeholder="25x25 cm" />
            </FloatingLabel>
            <Button variant="primary">¡Cotizar Ya!</Button>
          </Col>
        </Row>
      </div>
      <div>
        <h3>Enviar pedidos nunca fue mas facíl</h3>
        <Button variant="outline-primary">Realiza varios envios</Button>
      </div>
    </div>
  );
};

export default Quoter;
