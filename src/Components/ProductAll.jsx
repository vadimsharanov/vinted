import axios from "axios"
import React, { useEffect, useState } from "react"
import Product from "./Product.jsx"




function ProductAll(props) {
    const [productData, setProductData] = useState([])
    const [users, setUsers] = useState([])
    const [orderList, setOrderList] = useState([])
    const usersList = []
    let productList = []

    useEffect(() => {
        axios.get('https://in3.dev/vinted/api/news/')
        .then(function (response) {
        setOrderList(response.data);
        })
    }, []);

    useEffect(() => {
        const usersStorage = JSON.parse(localStorage.getItem('allUsers'));
        if (usersStorage !== null) {
            setUsers(usersStorage);
            return;
        }
            for (let i=1; i<=5;i++){
            let url = 'https://in3.dev/vinted/api/users/'
            url +=i
            axios.get(url)
            .then(function (response) {
                usersList.push(response.data)
                localStorage.setItem('allUsers', JSON.stringify(usersList));
                let usersCopy = JSON.parse(localStorage.getItem('allUsers'));
                if (usersCopy !== null) {
                    setUsers(usersCopy)
                    return ;
                }
            })
        }
    }, []);

    useEffect(() => {
        const productsStorage = JSON.parse(localStorage.getItem('allProducts'));

        if (productsStorage !== null) {
            axios.get('https://in3.dev/vinted/api/news/')
            .then(function (response) {
                localStorage.setItem('orderList', JSON.stringify(response.data));
                let orderListStorage = JSON.parse(localStorage.getItem('orderList'));
            if (orderListStorage.length === 0) {
                return ;
            }
            orderListStorage = orderListStorage.map(item=> item.id) 
            let sorted;
                sorted = productsStorage.sort(function(a,b) {
                    return orderListStorage.indexOf( a.id ) - orderListStorage.indexOf( b.id );
                })
                setProductData(sorted)

            })
            // setProductData(productsStorage);
            return;
        }
        for (let i=1; i<=20;i++){
            let url = 'https://in3.dev/vinted/api/products/'
            url +=i
            axios.get(url)
            .then(function (response) {
                productList.push(response.data)
                localStorage.setItem('allProducts', JSON.stringify(productList));
                const productsCopy = JSON.parse(localStorage.getItem('allProducts'));
                if (productsCopy !== null) {
                    setProductData(productsCopy)
                    return ;
                }
            })
        }
 
    }, []);
    const getOneUser = (id) => {
        for (let i = 0; i < users.length; i++) {
            if (id === users[i].id) {
                return users[i];
            }            
        }
        return '';
    }


    return  ( 
        <div className="main-container" >
            {productData.length < 0 ? <h2 className="loader"></h2> : productData.map((product, i) => <Product key={i} data={product} user={getOneUser(product.user)} ></Product>)}
        </div>
    )
}
            // <div>
            // {users.map((user, i )=> 
            //     <User data={user}> </User>
            
            // )}
           
            // </div>

export default ProductAll