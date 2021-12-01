import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { API } from "../../shared/api";
import "./singleProduct.scss";
const Sample = () => {
  const [data, setData] = useState("");
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");
  console.log(productID);
  async function getProduct() {
    try {
      const response = await axios.get(`${API}/products/${productID}`);
      setData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return <h1>{data.desc}</h1>;
};
export default Sample;
