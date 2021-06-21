import React from "react";

function Table({employees}) {
    return(
        <div>
            {employees.map(employee => (
                <div>
                    {employee.id}
                    {employee.name}
                    {employee.phone}
                </div>
            ))}
        </div>
    )
}

export default Table;