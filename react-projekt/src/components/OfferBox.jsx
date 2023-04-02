import React from "react";
import "../App.css";

const OfferBox = ({ isNew, serviceName }) => {
  return (
    <div className={isNew ? "service newService" : "service"}>
      <h5 className="serviceName">{serviceName}</h5>
      <p style={{ display: isNew ? "initial" : "none" }}>(nowość)</p>
    </div>
  );
};

export default OfferBox;
