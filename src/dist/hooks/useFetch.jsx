import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../shared/api";
import useLocalStorage from "./useLocalStorage";

const useFetch = (productID) => {
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  const [brand, setBrand] = useState("");
  const [cat, setCat] = useState("");
  useLocalStorage(`products`);
  useLocalStorage(`users`);
  useLocalStorage(`brands`);
  useLocalStorage(`cats`);

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
      let brand;
      let cat;
      if (
        checkIsEmpty("products") &&
        checkIsEmpty("users") &&
        checkIsEmpty("brands") &&
        checkIsEmpty("cats")
      ) {
        let allProducts = JSON.parse(localStorage.getItem(`products`));
        let allUsers = JSON.parse(localStorage.getItem(`users`));
        let allBrands = JSON.parse(localStorage.getItem("brands"));
        let allCats = JSON.parse(localStorage.getItem("cats"));

        product = allProducts[`product/${productID}`];
        user = allUsers[`user/${product.user}`];
        if (product.brand) {
          brand = allBrands[`brand/${product.brand}`];
          setBrand(brand);
        }
        cat = allCats[`cat/${product.cat}`];
        setData(product);
        setUser(user);
        setCat(cat);
      } else {
        product = await axios.get(`${API}/products/${productID}`);
      }
      if (product.data) {
        const allProducts = JSON.parse(localStorage.getItem("products"));
        allProducts[`product/${productID}`] = product.data;
        localStorage.setItem("products", JSON.stringify(allProducts));

        user = await axios.get(`${API}/users/${product.data.user}`);
        const users = JSON.parse(localStorage.getItem("users"));
        users[`user/${product.data.user}`] = user.data;
        localStorage.setItem("users", JSON.stringify(users));

        if (product.data.brand) {
          brand = await axios.get(`${API}/brands/${product.data.brand}`);
          setBrand(brand.data);
          const brands = JSON.parse(localStorage.getItem("brands"));
          brands[`brand/${product.data.brand}`] = brand.data;
          localStorage.setItem("brands", JSON.stringify(brands));
        }

        cat = await axios.get(`${API}/cats/${product.data.cat}`);
        const cats = JSON.parse(localStorage.getItem("cats"));
        cats[`cat/${product.data.cat}`] = cat.data;
        localStorage.setItem("cats", JSON.stringify(cats));

        setCat(cat.data);
        setUser(user.data);
        setData(product.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, [productID]);
  return [user, data, brand, cat];
};
export default useFetch;
