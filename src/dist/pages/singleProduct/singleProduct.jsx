import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../shared/api";

const SingleProduct = ({ productID }) => {
  const [data, setData] = useState("");
  async function getUser() {
    try {
      const response = await axios.get(`${API}/products/${productID}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUser();
  }, [productID]);

  return <div>{data.desc}</div>;
};
export default SingleProduct;
