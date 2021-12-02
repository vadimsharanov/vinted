import React, { useEffect, useState } from "react";
import "./globalFeed.scss";
import { API } from "../../shared/api";
import axios from "axios";
import SingleProduct from "../card/card";
const GlobalFeed = () => {
  const [products, setProducts] = useState("");
  const apiUrl = `${API}/news/`;

  useEffect(() => {
    getProductID();
  }, []);

  async function getProductID() {
    try {
      const response = await axios.get(apiUrl);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!products) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='product-container'>
      {products.map((item) => (
        <SingleProduct productID={item.id} key={item.id}></SingleProduct>
      ))}
    </div>
  );
};
export default GlobalFeed;
