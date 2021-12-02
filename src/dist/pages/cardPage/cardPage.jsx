import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useLocalStorage from "../../hooks/useLocalStorage";
import { API } from "../../shared/api";

const CardPage = () => {
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");

  const [data, setData] = useState("");
  const [token] = useLocalStorage(`product/${productID}`);
  console.log(token);
  async function getProduct() {
    try {
      const response = token
        ? JSON.parse(localStorage.getItem(`product/${productID}`))
        : await axios.get(`${API}/products/${productID}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <h1>
      {data.desc}
      <h1>{data.username}</h1>
    </h1>
  );
};
export default CardPage;
