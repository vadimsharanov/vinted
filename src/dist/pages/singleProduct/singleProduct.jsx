import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../shared/api";
import "./singleProduct.scss";
const SingleProduct = ({ productID }) => {
  console.log(productID);
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  async function getProduct() {
    try {
      const response = await axios.get(`${API}/products/${productID}`);
      const responsee = await axios.get(`${API}/users/${response.data.user}`);
      setData(response.data);
      setUser(responsee.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, [productID]);

  return (
    <Link to={`/products/${productID}`} className='product-card'>
      {data.desc}
      <h1>{user.name}</h1>
    </Link>
  );
};
export default SingleProduct;
