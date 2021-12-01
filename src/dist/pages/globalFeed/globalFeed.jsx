import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./globalFeed.scss";
import { API } from "../../shared/api";
import axios from "axios";
import SingleProduct from "../singleProduct/singleProduct";
const GlobalFeed = () => {
  const [products, setProducts] = useState("");
  const apiUrl = `${API}/news/`;

  useEffect(() => {
    getProductID();
  }, []);

  async function getProductID() {
    try {
      const response = await axios.get("https://in3.dev/vinted/api/news/");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!products) {
    return <h1>not yet</h1>;
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
