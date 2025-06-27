import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold">{title}</h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
