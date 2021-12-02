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
  const [token] = useLocalStorage(`products`);

  const checkIsEmpty = () => {
    const trial = JSON.parse(localStorage.getItem(`products`));
    if (Object.keys(trial).length === 0) {
      return false;
    }
    return true;
  };

  async function getProduct() {
    try {
      let product;
      if (checkIsEmpty()) {
        let allProducts = JSON.parse(localStorage.getItem(`products`));
        product = allProducts[`product/${productID}`];
      } else {
        product = await axios.get(`${API}/products/${productID}`);
      }

      if (product.data) {
        const objekt = JSON.parse(localStorage.getItem("test"));
        objekt[`product/${productID}`] = product.data;
        localStorage.setItem("test", JSON.stringify(objekt));
      }
      const user = await axios.get(`${API}/users/${product}`);
      // console.log(user);
      setData(product.data ? product.data : product);
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
      {/* <h1>{user.name}</h1> */}
    </Link>
  );
};
export default Card;
