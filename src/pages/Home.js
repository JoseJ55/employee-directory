import React from "react";
import Table from "../components/Table/Table";
import Pages from "../components/pages/Pages";
import Sort from "../components/sort/Sort"

function Home({employees}){
    return (
        <div>
            <Sort />
            {employees.map((employee) => (
                <Table employee={employee}/>
            ))}
            <Pages />
        </div>
    )
}

export default Home;