import React from "react";
import "../reset.css";
import "../App.css";
import { employeesList } from "../data/Employees";
import Employee from "./Employee";

const AboutSection = () => {
  const newEmployeesList = employeesList.map((employee, key) => (
    <li className="specialist" key={key}>
      <div
        className="photo"
        style={{ backgroundImage: `url(${employee.photo})` }}
      ></div>
      <div className="specialistText">
        <h4 className="specialistName">
          {employee.fname} {employee.lname} ({employee.position})
        </h4>
        <p>{employee.description}</p>
      </div>
    </li>
  ));
  return (
    <section id="aboutSection">
      <div className="container aboutSectionElements">
        <h3 className="specialistTop">Nasi specjaliści</h3>
        <ul>{newEmployeesList}</ul>
      </div>
    </section>
  );
};

export default AboutSection;
