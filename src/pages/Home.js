import React from "react";
import Table from "../components/Table/Table";
import Pages from "../components/pages/Pages";

function Home({employees}){
    return (
        <div>
            {employees.map((employee) => (
                <Table employee={employee}/>
            ))}
            <Pages />
        </div>
    )
}

export default Home;