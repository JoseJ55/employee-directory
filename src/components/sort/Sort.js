import React from "react";
import "./style.css";
import Table from "../Table/Table"

function Sort({employees, compare, sorting}) {
    return (
        <div>
            <label >Sort By: </label>
            {/* Keep getting error for "this.value" when changing select input. */}
            <select onChange={() => console.log(this.value)} name="sort">
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="gender">Gender</option>
                <option value="phone">Phone number</option>
                <option value="email">Email</option>
            </select>

            {employees.sort(compare).map((employee) => (
                <Table employee={employee}/>
            ))}
        </div>
    )
}

export default Sort;