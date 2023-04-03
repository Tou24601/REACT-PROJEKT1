import React from "react";
import "../reset.css";
import "../App.css";
import { employeesList } from "../data/Employees";
import Employee from "./Employee";

const AboutSection = () => {
  const newEmployeesList = employeesList.map((employee, key) => (
    <Employee
      key={key}
      photo={employee.photo}
      employeeData={`${employee.fname} ${employee.lname} (${employee.position})`}
      employeeDescription={employee.description}
    />
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
