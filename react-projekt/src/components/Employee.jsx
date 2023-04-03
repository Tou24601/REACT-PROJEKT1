import React from "react";
import "../reset.css";
import "../App.css";

const Employee = ({ photo, employeeData, employeeDescription }) => {
  return (
    <div className="specialist">
      <div className="photo" style={{ backgroundImage: `url(${ photo })` }}></div>
      <div className="specialistText">
        <h4 className="specialistName">{employeeData}</h4>
        <p>{employeeDescription}</p>
      </div>
    </div>
  );
};

export default Employee;
