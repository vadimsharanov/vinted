import axios from "axios"
import { useEffect, useState } from "react"
import ProductData from "./Product.jsx"
import Product from "./Product.jsx"
import User from "./User.jsx"


function App(props) {
    const [productData, setProductData] = useState([])
    const [users, setUsers] = useState([])
    const [usersData, setUsersData] = useState([])
    const usersList = []
    const productList = []

    useEffect(() => {
        getUsers()
        const productsCopy = JSON.parse(localStorage.getItem('allProducts'));
        const usersCopy = JSON.parse(localStorage.getItem('allUsers'));
        setProductData(productsCopy)
        setUsers(usersCopy)
        getProducts()
    },[])

    async function getUsers() {
        try {
            let response; 
            for (let i=1; i<=5;i++){
                let url = 'https://in3.dev/vinted/api/users/'
                url +=i
                response = await axios.get(url)
                usersList.push(response.data)  
            }
            localStorage.setItem('allUsers', JSON.stringify(usersList));
            setUsers(usersList)
        } catch (error) {
          console.error(false);
        }
      }

      async function getProducts() {
        try {
            let response; 
            for (let i=1; i<=20;i++){
                let url = 'https://in3.dev/vinted/api/products/'
                url +=i
                response = await axios.get(url)
                productList.push(response.data)
            }
            localStorage.setItem('allProducts', JSON.stringify(productList));
            setProductData(productList)
        } catch (error) {
            console.error(error)
        }
    }

    const getOneUser = (id) => {
        for (let i = 0; i < users.length; i++) {
            if (id === users[i].id) {
                return users[i];
            }            
        }
        return '';
    }

    console.log(productData);
    console.log(users);
    return  ( 
    <>
    <h1></h1>

        <div className="main-container" >
            {productData === null? <h2 className="loader" ></h2> : productData.map((product, i) => <Product key={i} data={product} user={getOneUser(product.user)} ></Product>)}
        </div>
    </>
    )
}
            // <div>
            // {users.map((user, i )=> 
            //     <User data={user}> </User>
            
            // )}
           
            // </div>

export default App