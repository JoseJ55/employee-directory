import React from "react";
// import Pages from "../components/pages/Pages";
import Sort from "../components/sort/Sort"

function Home({employees, sort}){
    // const employeeData = []
        
    // employees.map((employee) => (
    //     employeeData.push(employee)
    // ))

    // console.log(employeeData.sort(compare))


    return (
        <div>
            <Sort employees={employees}/>

            {/* {employees.map((employee) => ( */}
            {/* <Table employee={employeeData}/> */}
            {/* // ))} */}
            {/* <Pages /> */}
        </div>
    )
}

export default Home;