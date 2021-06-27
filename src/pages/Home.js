import React from "react";
// import Pages from "../components/pages/Pages";
import Sort from "../components/sort/Sort"

function Home({employees}){
    function sorting(value) {
        switch(value){
            case "home":
                console.log("Home")
                break;
            default:
                console.log("select");
                break;
        }
    }

    function compare(a, b){
        if(a.last < b.last){
            return -1;
        }
        if(a.last > b.last){
            return 1;
        }
        // console.log("sorting by last name")
        return 0;
    }

    return (
        <div>
            <Sort 
                employees={employees} 
                compare={compare}
                sorting={sorting}
            />
            {/* <Pages /> */}
        </div>
    )
}

export default Home;