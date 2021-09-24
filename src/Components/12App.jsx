import axios from "axios"
import { useEffect, useState } from "react"
// import User from "./User"



function ProductData(props) {
    const productList = []
    const [productData, setProductData] = useState([])
    useEffect(() => {
        const animalsCopy = JSON.parse(localStorage.getItem('allProducts'));
        setProductData(animalsCopy)
        getProducts()
    },[])
   
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
            console.log(productData);  

        } catch (error) {
            console.error(error)
        }
    }
    console.log(productData)
// console.log(usersData[0]);
    return( <>yo</>
        
        )
    }
    
export default ProductData