import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import { API } from "../../shared/api";
import "./card.scss";

const Card = ({ productID }) => {
  const [user, data] = useFetch(productID);

  return (
    <Link to={`/products/${productID}`} className='product-card'>
      {data.desc}
      <h1>{user.name}</h1>
    </Link>
  );
};
export default Card;
