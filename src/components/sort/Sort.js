import React from "react";
import "./style.css";
import Table from "../Table/Table"

function Sort({employees}) {
    // function sorting(value) {
    //     switch(value){
    //         case "name":
    //             console.log("name select")
    //             break;
    //         case "gender":
    //             console.log("gender select")
    //             break;
    //         case "phone":
    //             console.log("phone select")
    //             break;
    //         case "email":
    //             console.log("email select")
    //             break;
    //         default:
    //             break;
    //     }
    // }

    function compare(a, b){
        if(a.last < b.last){
            return -1;
        }
        if(a.last > b.last){
            return 1;
        }
        console.log("sorting by last name")
        return 0;
    }

    return (
        <div>
            <label >Sort By: </label>
            <select  name="sort">
                <option defaultValue="select">Select</option>
                <option /*onChange={sorting("name")}*/ value="name">Name</option>
                <option /*onChange={sorting("gender")}*/ value="gender">Gender</option>
                <option /*onChange={sorting("phone")}*/ value="phone">Phone number</option>
                <option /*onChange={sorting("email")}*/ value="email">Email</option>
            </select>

            {employees.sort(compare).map((employee) => (
                <Table employee={employee}/>
            ))}
        </div>
    )
}

export default Sort;