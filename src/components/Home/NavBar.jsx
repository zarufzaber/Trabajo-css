import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import cobox from "../../utils/Recurso 2_10x.png";
import "../../assets/styles/NavBar.css";
const NavBar = () => {
  return (
    <Navbar expand="lg"  >
      <Container className="navbar-container">
        <Navbar.Brand href="/">
          <img className="logo" src={cobox} alt="Cobox" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#/about">Acerca de</Nav.Link>
            <Nav.Link href="#/empresa">Soy empresa</Nav.Link>
            <Nav.Link href="#/courier">Soy courier</Nav.Link>
            <Button type="submit" className={'bg-blue-700 hover:bg-blue-900'}>Registrate</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
