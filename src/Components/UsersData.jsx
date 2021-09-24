import axios from "axios"
import { useEffect, useState } from "react"
import User from "./User"


function UsersData(props) {
    const [usersData, setUsersData] = useState([])

    useEffect(() => {
        getUser()
        
    },[])
   
    async function getUser() {
        try {
            const usersList = []
            let response; 
            for (let i=1; i<=5;i++){
                let url = 'https://in3.dev/vinted/api/users/'
                url +=i
                response = await axios.get(url)
                usersList.push(response.data)  
            }

            setUsersData(usersList)
        } catch (error) {
          console.error(error)
        }
      }
// console.log(usersData[0]);
    return( 
        <div>

            {usersData.map((user, i )=> <User data={user} > </User>)}
        </div>

    )
}

export default UsersData