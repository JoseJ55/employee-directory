import React from "react";
import Table from "../components/Table/Table"

function Home({employees}){
    return (
        employees.map(employee => (
            <Table employee={employee}/>
        ))
    )
}

export default Home;