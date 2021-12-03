import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./card.scss";

const Card = ({ productID }) => {
  const [user, data, brand, cat] = useFetch(productID);
  console.log(cat.title);
  return (
    <Link to={`/products/${productID}`} className='product-card'>
      {data.desc}
      <h1>{user.name}</h1>
      <h1>{brand.title}</h1>
      <h1>{cat.title}</h1>
    </Link>
  );
};
export default Card;