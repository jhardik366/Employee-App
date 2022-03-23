import React from "react";

function Display(props) {
    return props.employeeData === null ? (
        <h2>{props.employeeData}</h2>
    ) : (
        <div>
            <h2>Employee Id: {props.employeeData.empId}</h2>
            <h2>Username: {props.employeeData.username}</h2>
            <h2>Email: {props.employeeData.email}</h2>
            <h2>Phone No.: {props.employeeData.phoneNo}</h2>
            <h2>Salary: {props.employeeData.salary}</h2>
        </div>
    );
}

export default Display;
