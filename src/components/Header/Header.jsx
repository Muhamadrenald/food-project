import React from "react";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="header-nav fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Foodwagon Logo"
            height="35"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Bagian tengah: Info Pengiriman */}
          <Nav className="mx-auto">
            <div className="delivery-info d-flex align-items-center">
              <span>Deliver to:</span>
              <MdLocationOn className="mx-1 orange-icon" />
              <span className="fw-bold">
                Current Location Mohammadpur Bus Stand, Dhaka
              </span>
            </div>
          </Nav>

          {/* Bagian kanan: Tombol Search dan Login */}
          <Nav>
            <div className="d-flex align-items-center">
              {/* Tombol Search Food */}
              <Button
                variant="transparent"
                className="search-button d-flex align-items-center me-3"
              >
                <BsSearch className="me-2 orange-icon" />
                <span className="font-bold">Search Food</span>
              </Button>

              {/* Tombol Login */}
              <Button
                variant="light"
                className="login-button d-flex align-items-center"
              >
                <FaRegUser className="me-2 orange-icon" />
                <span className="gradient-text font-bold">Login</span>
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
