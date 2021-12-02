import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { API } from "../../shared/api";

const CardPage = () => {
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");
  const [user, data] = useFetch(productID);

  return <h1>{data.desc}</h1>;
};
export default CardPage;
