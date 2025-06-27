import React from "react";

const WorkStepCard = ({ icon, title, description }) => {
  const IconComponent = icon;

  return (
    <div className="flex flex-col items-center text-center p-4">
      <div style={{ marginBottom: "20px" }}>
        <IconComponent size={80} style={{ color: "#FF6B35" }} />
      </div>
      <h5 className="fw-bold">{title}</h5>
      <p className="text-muted small">{description}</p>
    </div>
  );
};

export default WorkStepCard;
