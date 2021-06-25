import axios from "axios";

// export default {
//     employeeData: function() {
//         console.log("api working")
//         return axios.get("https://randomuser.me/api/").then(res => {
//             const user = res.results
//             console.log(user);
//             return user.map(data => {
//                 console.log(data)
//                 return data
//             })
//         })
//     }
// }

const userData = () => {
    return axios.get("https://randomuser.me/api/?results=20").then(res => {
        return res.data.results
        // console.log(res.data.results);
        // res.results.map(data => {
        //     console.log(data)
        //     return data
        // })
    })
}

export default userData;