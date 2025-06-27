import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { promoItems } from "../constants/data";
import { IoChevronForward } from "react-icons/io5";

const FoodPromo = () => {
  return (
    <div className="bg-gray-50 py-20" id="promo">
      <Container>
        <div className="space-y-16">
          {promoItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                index === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <Row className="g-0 align-items-center min-h-[400px]">
                {/* Text Content */}
                <Col
                  lg={6}
                  className={`p-8 lg:p-12 d-flex align-items-center justify-content-center ${
                    item.layout === "right" ? "order-lg-2" : ""
                  }`}
                >
                  <div className="max-w-md text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      {item.title}{" "}
                      <span className="text-orange-400">{item.highlight}</span>
                    </h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                      {item.description}
                    </p>
                    <button
                      className="
                        !rounded-full bg-orange-400 hover:bg-orange-500
                        text-white font-semibold
                        px-4 py-2 
                        transition-all duration-300
                        transform hover:scale-105 hover:shadow-lg
                        focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
                        !inline-flex items-center gap-2 justify-center
                    "
                    >
                      {item.buttonText}
                      <IoChevronForward size={18} />
                    </button>
                  </div>
                </Col>

                {/* Image */}
                <Col
                  lg={6}
                  className={`${item.layout === "right" ? "order-lg-1" : ""}`}
                >
                  <div className="h-[300px] lg:h-[400px] relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.highlight}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FoodPromo;
