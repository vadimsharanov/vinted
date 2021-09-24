import axios from "axios"
import { useEffect, useState } from "react"


function User(props) {
    // const [usersData, setUsersData] = useState([])
    const noAvatar = "https://play-lh.googleusercontent.com/-KEUSBhEjA-A/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckWYBLYp6p7p5y1jMBaog7Wxvfw7g/photo.jpg"
    useEffect(() => {
        // getUser()
        
    },[])
   
    // async function getUser() {
    //     try {
    //         const usersList = []
    //         let response; 
    //         for (let i=1; i<=5;i++){
    //             let url = 'https://in3.dev/vinted/api/users/'
    //             url +=i
    //             response = await axios.get(url)
    //             usersList.push(response.data)  
    //             setUsersData(usersList)
    //         }
    //         console.log(usersList);
    //     } catch (error) {
    //       console.error(error)
    //     }
    //   }
    return( 
        <div className="user">
            <div>
                <img className="user-avatar" src={props.data.avatar ? props.data.avatar : noAvatar} alt="Netu nihuya" />
            </div>
            <div className="user-name">
                {props.data.name}
            </div>
        </div>
    )
}

export default User