import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../shared/api";
import useLocalStorage from "./useLocalStorage";

const useFetch = (productID) => {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  useLocalStorage(`products`);
  useLocalStorage(`users`);

  const checkIsEmpty = (name) => {
    const trial = JSON.parse(localStorage.getItem(name));
    if (Object.keys(trial).length === 0) {
      return false;
    }
    return true;
  };

  async function getProduct() {
    try {
      let product;
      let user;
      if (checkIsEmpty("products")) {
        let allProducts = JSON.parse(localStorage.getItem(`products`));
        let allUsers = JSON.parse(localStorage.getItem(`users`));
        product = allProducts[`product/${productID}`];
        user = allUsers[`user/${product.user}`];
        setData(product);
        setUser(user);
      } else {
        product = await axios.get(`${API}/products/${productID}`);
      }
      if (product.data) {
        const objekt = JSON.parse(localStorage.getItem("products"));
        objekt[`product/${productID}`] = product.data;
        localStorage.setItem("products", JSON.stringify(objekt));
        user = await axios.get(`${API}/users/${product.data.user}`);
        const users = JSON.parse(localStorage.getItem("users"));
        users[`user/${product.data.user}`] = user.data;
        localStorage.setItem("users", JSON.stringify(users));
        setUser(user.data);
        setData(product.data);
      }
    } catch (error) {
      console.error(error);
    }
    // return [user, data];
  }
  useEffect(() => {
    getProduct();
  }, [productID]);
  return [user, data];
};
export default useFetch;
