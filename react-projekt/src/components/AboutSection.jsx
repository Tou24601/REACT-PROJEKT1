import React from "react";
import "../index.css";

const AboutSection = () => {
  const specialistsList = [
    {
      fname: "Anna",
      lname: "Kowalska",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      photo: "./images/pexels-andrea-piacquadio-3769021.jpg"
    },
    {
      fname: "Zofia",
      lname: "Nowak",
      position: "PR",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ea enim, natus illo ad necessitatibus.",
      photo: "./images/pexels-edmond-dantès-4347368.jpg"
    },
  ];
  const newSpecialistList = specialistsList.map((specialist, key) => (
    <li className="specialist" key={key}>
      <div
        className="photo"
        style={{ backroundImage: `url(${specialist.photo})` }}
      ></div>
      <div className="specialistText">
        <h4 className="specialistName">
          {specialist.fname} {specialist.lname} ({specialist.position})
        </h4>
        <p>{specialist.description}</p>
      </div>
    </li>
  ));
  return (
    <section id="aboutSection">
      <div className="container aboutSectionElements">
        <h3 className="specialistTop">Nasi specjaliści</h3>
        <ul>{newSpecialistList}</ul>
      </div>
    </section>
  );
};

export default AboutSection;
