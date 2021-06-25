import React from "react";
import "./style.css";

function Table({employee}) {
    return(
        <div className="table">
            <ul className="row">
                <li className="id">{employee.id}</li>
                <li className="gender">{employee.gender}</li>
                <li className="name">{employee.first} {employee.last}</li>
                <li className="phone">{employee.cell}</li>
                <li className="email">{employee.email}</li>
                <li className="photo"><img src={employee.pic} alt={employee.first}/></li>
            </ul>
        </div>
    )
}

export default Table;