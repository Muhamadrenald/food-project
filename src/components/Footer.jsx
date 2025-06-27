import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* Kolom 1: Logo & Deskripsi */}
          <Col md={6} lg={3} className="mb-4">
            <h5 className="fw-bold mb-3">FoodWagon</h5>
            <p className="text-white-50">
              The best food ordering and delivery service for you.
            </p>
          </Col>

          {/* Kolom 2: Opening Restaurant */}
          <Col md={6} lg={3} className="mb-4">
            <h5 className="mb-3">Opening Restaurant</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Sa - We: 09:00am - 10:00pm</li>
              <li className="mb-2">Thursday: 09:00am - 05:00pm</li>
              <li className="mb-2">Friday: Closed</li>
            </ul>
          </Col>

          {/* Kolom 3: User Link */}
          <Col md={6} lg={3} className="mb-4">
            <h5 className="mb-3">User Link</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Order Delivery
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Payment & Tax
                </a>
              </li>
            </ul>
          </Col>

          {/* Kolom 4: Contact Us */}
          <Col md={6} lg={3} className="mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="text-white-50">
              123 Main Street, Yogyakarta, Indonesia
              <br />
              +62 012 3456 789
            </p>
          </Col>
        </Row>
        <hr className="bg-white-50" />
        <Row>
          <Col className="text-center text-white-50">
            <p>
              &copy; {new Date().getFullYear()} FoodWagon. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
