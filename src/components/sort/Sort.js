import React from "react";
import "./style.css";

function Sort() {
    return (
        <div>
            <select  name="sort">
                <option value="name">Name</option>
                <option value="gender">Gender</option>
                <option value="phone">Phone number</option>
                <option value="email">Email</option>
            </select>
        </div>
    )
}

export default Sort;