import React, {useState} from "react";
import {BrowserRouter, Route} from "react-router-dom"
import Home from "./pages/Home";
import Details from "./pages/Details";
// import employeeData from "./utils/API";

function App() {
  const [employees, setEmployees] = useState([
    {id: 1, name: "John", phone: "618-239-5346"},
    {id: 2, name: "Eric", phone: "728-534-6543"}
  ])

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
