import axios from "axios"
import { useEffect, useState } from "react"
// import User from "./User"
const noAvatar = "https://play-lh.googleusercontent.com/-KEUSBhEjA-A/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckWYBLYp6p7p5y1jMBaog7Wxvfw7g/photo.jpg"

function ProductData(props) {
    const productList = []
    const [productData, setProductData] = useState([])
    useEffect(() => {
        getUser()
        
    },[])
   
    async function getUser() {
        try {
            
            let response; 
            for (let i=1; i<=20;i++){
                let url = 'https://in3.dev/vinted/api/products/'
                url +=i
                response = await axios.get(url)
                productList.push(response.data)  
            }

            setProductData(productData)
        } catch (error) {
          console.error(error)
        }
      }

// console.log(usersData[0]);
    return( <>
          <div className="data-container">
          <div className="user-name" >
            <div>
            <img className="user-avatar" src={props.user.avatar ? props.user.avatar : noAvatar} alt="Netu nihuya" />
            </div>
            {props.user.name}
        </div>
        <div className="product-image-price-size" >
            <img className="product-image" src={props.data.img[1]} alt="" />
            <span className="price-size-container" style={{marginLeft:"10px"}} >
                <span className="product-price">
            {props.data.price.toFixed(2)}€
                </span>
                <span className="product-size" >
            {props.data.size.map((oneSize,i)=> oneSize+" / " )}
                </span>
            </span>
        </div>
        </div>
        </>
        
        )
    }
    
export default ProductData