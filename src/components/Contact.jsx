import React from "react";
import { Button, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="text-center"
      style={{
        backgroundColor: "#FFF9F0",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <Container>
        <h2 className="fw-bold mb-3 text-dark">
          Ready to get in touch with us?
        </h2>
        <p className="mb-4 fs-5 text-dark">
          Contact us today to learn more about our offers and services.
        </p>
        <p className="mb-2 fs-5 text-dark">
          <strong>Phone:</strong> +62 012 3456 789
        </p>
        <p className="mb-2 fs-5 text-dark">
          <strong>Email:</strong> food@gmail.com
        </p>
        <p className="mb-4 fs-5 text-dark">
          <strong>Address:</strong> 123 Main Street, Yogyakarta, Indonesia
        </p>
        <Button
          variant="warning"
          className="fw-bold text-white px-4 py-2 rounded-pill"
          href="#"
        >
          Contact Us
        </Button>
      </Container>
    </section>
  );
};

export default Contact;
