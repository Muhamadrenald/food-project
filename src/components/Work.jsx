import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import WorkStepCard from "./WorkStepCard";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

const Work = () => {
  const steps = [
    {
      icon: IoLocationOutline,
      title: "Select location",
      description: "Choose the location where your food will be delivered.",
    },
    {
      icon: MdOutlineRestaurantMenu,
      title: "Choose order",
      description: "Check over hundreds of menus to pick your favorite food.",
    },
    {
      icon: MdOutlinePayment,
      title: "Pay advanced",
      description:
        "It's quick, safe, and simple. Select several methods of payment.",
    },
    {
      icon: IoRestaurantOutline,
      title: "Enjoy meals",
      description: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "", padding: "80px 0" }}
      className="py-20"
      id="work"
    >
      <Container>
        <SectionTitle title="How does it work" />
        <Row className="mt-5">
          {steps.map((step, index) => (
            <Col key={index} lg={3} md={6} className="mb-4 mb-lg-0">
              <WorkStepCard
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Work;
