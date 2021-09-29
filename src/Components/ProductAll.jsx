import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product.jsx"


function ProductAll(props) {
    const [productData, setProductData] = useState([])
    const [users, setUsers] = useState([])
    const [orderList, setOrderList] = useState([])
    const usersList = []
    let productList = []


    useEffect(() => {
        const productsCopy = JSON.parse(localStorage.getItem('allProducts'));
        const usersCopy = JSON.parse(localStorage.getItem('allUsers'));

        if (productsCopy !== null) {
            async function getProducts() {
                try {
                    let  orderResponse
                    orderResponse = await axios.get('https://in3.dev/vinted/api/news/');
                    if (productsCopy !== null) {
                        var sorted = productsCopy.sort(function(a,b) {
                            return orderResponse.data.id.indexOf( a.id ) - orderResponse.data.id.indexOf( b.id );
                        })
                        setProductData(sorted)
                    }  
                } catch (error) {
                    console.error(error)
                }
            }
        }
        else {
            setProductData(productsCopy)
        }
        getProducts()
        getUsers()
        setUsers(usersCopy)

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
            let response, orderResponse
            let finalProductList = []
            for (let i=1; i<=20;i++){
                let url = 'https://in3.dev/vinted/api/products/'
                url +=i
                response = await axios.get(url)
                productList.push(response.data)
            }
            orderResponse = await axios.get('https://in3.dev/vinted/api/news/');

            for (let i=0; i<productList.length;i++) {
                for (let j=0; j<productList.length;j++) {
                    if (productList[j].id=== orderResponse.data[i].id){
                        finalProductList.push(productList[j])
                    }
                }
            }
 
            localStorage.setItem('allProducts', JSON.stringify(productList));
            setProductData(finalProductList)
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


    return  ( 
    <>
    <h1></h1>

        <div className="main-container" >
            {productData === null || productData.length ===0 ? <h2 className="loader"></h2> : productData.map((product, i) => <Product key={i} data={product} user={getOneUser(product.user)} ></Product>)}
        </div>
    </>
    )
}
            // <div>
            // {users.map((user, i )=> 
            //     <User data={user}> </User>
            
            // )}
           
            // </div>

export default ProductAll