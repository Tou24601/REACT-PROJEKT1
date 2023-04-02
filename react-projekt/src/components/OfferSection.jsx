import React from "react";
import "../index.css";
import OfferBox from "./OfferBox";

const OfferSection = () => {
  const listOfServices = [
    { name: "Usługa 1" },
    { name: "Usługa 2" },
    { name: "Usługa 3" },
    { name: "Usługa 4" },
    { name: "Usługa 5" },
    { name: "Usługa 6" },
  ];
  const newList = listOfServices.map((service, key) => (
    <OfferBox
      serviceName={service.name}
      key={key}
      isNew={key === 0 ? true : false}
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
