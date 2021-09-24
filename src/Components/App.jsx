import axios from "axios"
import { useEffect, useState } from "react"
// import Data from "./Data.jsx"
import UsersData from "./UsersData.jsx"


function App(props) {
    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     getUsers()
        
    // },[])
   
    // async function getUsers() {
    //     try {
    //         const usersList = []
    //         let response; 
    //         for (let i=1; i<=5;i++){
    //             let url = 'https://in3.dev/vinted/api/users/'
    //             url +=i
    //             response = await axios.get(url)
    //             users.push(response.data)  
    //             setUsers(usersList)
    //         }
    //     } catch (error) {
    //       console.error(false);
    //     }
    //   }

    return(
        <UsersData></UsersData>
    )
}

export default App