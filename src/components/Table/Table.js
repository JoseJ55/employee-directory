import React from "react";
import "./style.css";

function Table({employee}) {
    return(
        <div className="table">
            <ul className="row">
                <li className="id">{employee.id}</li>
                <li className="name">{employee.name}</li>
                <li className="phone">{employee.phone}</li>
            </ul>
        </div>
    )
}

export default Table;