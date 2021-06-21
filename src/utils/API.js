import axios from "axios";
const employeeData = async() => {
    const data = await axios.get("https://randomuser.me/api/").then(data => {
        console.log(data);
    })
    
    return data;
}

export default employeeData;