import React from "react";
import "./style.css";

function Pages({prevPage, nextPage}){
    return (
        <div className="buttons">
            <button onClick={prevPage} className="prevBtn">Prev</button>
            <button onClick={nextPage} className="nextBtn">Next</button>
        </div>
    )
}

export default Pages;