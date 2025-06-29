import React from "react";
import "./PromoBanner.css";
import ramenImage from "../../../assets/ramen.png";
// import friesImage from "../../../assets/ramen.png";

const PromoBanner = () => {
  return (
    <section className="cta-section">
      <img src={ramenImage} alt="Salad" className="cta-image left" />
      <div className="cta-content">
        <h2>
          Are you ready to order with
          <br />
          the best deals?
        </h2>
        <button className="cta-button">
          PROCEED TO ORDER <span className="arrow">➔</span>
        </button>
      </div>
      <img src={ramenImage} alt="Fries" className="cta-image right" />
    </section>
  );
};

export default PromoBanner;
