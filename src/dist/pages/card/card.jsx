import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { API } from "../../shared/api";
import "./singleProduct.scss";

const Card = ({ productID, setFinished }) => {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token] = useLocalStorage(`product/${productID}`);
  async function getProduct() {
    try {
      setIsLoading(true);
      const product = token
        ? JSON.parse(localStorage.getItem(`product/${productID}`))
        : await axios.get(`${API}/products/${productID}`);

      if (product.data) {
        localStorage.setItem(`product/${productID}`, JSON.stringify(product));
      }
      const user = await axios.get(`${API}/users/${product.data.user}`);
      setData(product.data);
      setUser(user.data);
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
export default Card;
