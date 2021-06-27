import React, {useState, useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./pages/Home";
import Details from "./pages/Details";
import userData from "./utils/API";

function App() { // want to add functionallity to buttons
  const [employees, setEmployees] = useState([])
  // const [sort, setSort] = useState([]) / find a way to use this / 

  useEffect(() => {
    userData().then(res => {
      setEmployees(res.map(employee => ({
        gender: employee.gender,
        first: employee.name.first,
        last: employee.name.last,
        cell: employee.cell,
        email: employee.email,
        id: employee.id.value,
        pic: employee.picture.medium
      })))
    })
  }, [])

  // console.log(employees)

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <Home employees={employees}/>
        </Route>
        <Route exact path="/details" >
          <Details/>  
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
