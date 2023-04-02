import React from "react";
import "../App.css";
import OfferBox from "./OfferBox";
import { listOfServices } from "../data/Services";

const OfferSection = () => {
  const newList = listOfServices.map((service, key) => (
    <OfferBox
      serviceName={service.name}
      key={key}
      isNew={service.isNew ? true : false}
    />
  ));
  return (
    <section id="offerSection">
      <div className="container offerSectionElements">
        <h4 className="offerTop">Czym zajmuje się nasza firma?</h4>
        <ul className="serviceBox">{newList}</ul>
      </div>
    </section>
  );
};

export default OfferSection;
