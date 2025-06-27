import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="d-inline-block align-top me-2"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="w-100">
          <Nav className="justify-content-center flex-grow-1">
            <Nav.Link href="#work" className="nav-link-custom mx-2">
              Work
            </Nav.Link>
            <Nav.Link href="#menu" className="nav-link-custom mx-2">
              Menu
            </Nav.Link>
            <Nav.Link href="#promo" className="nav-link-custom mx-2">
              Promo
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom mx-2">
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="warning" className="fw-bold text-white ms-auto">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
