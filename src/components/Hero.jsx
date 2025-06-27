import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import heroImage from "../assets/bowl.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      style={{
        backgroundColor: "#FFF9F0",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      className="pt-10"
    >
      <Container>
        <Row className="align-items-center">
          {/* Kolom Teks dan Search Bar */}
          <Col lg={6} md={12}>
            <h1 className="display-4 fw-bolder">Are you starving?</h1>
            <p className="lead text-muted my-4">
              Within a few clicks, find meals that are accessible near you.
            </p>
            <InputGroup className="mb-3 shadow-sm">
              <Form.Control
                placeholder="Find your favorite food..."
                aria-label="Find your favorite food"
                style={{ padding: "0.8rem" }}
              />
              <Button
                variant="warning"
                id="button-addon2"
                className="fw-bold text-white px-4"
              >
                Find
              </Button>
            </InputGroup>
          </Col>

          {/* Kolom Gambar */}
          <Col lg={6} className="d-none d-lg-block text-center">
            <img
              src={heroImage}
              alt="Food Bowl"
              className="img-fluid"
              style={{ maxWidth: "450px", marginTop: "2rem" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
