import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./card.scss";

const Card = ({ productID }) => {
  const [user, data] = useFetch(productID);
  console.log(data);
  return (
    <Link to={`/products/${productID}`} className='product-card'>
      {data.desc}
      <h1>{user.name}</h1>
    </Link>
  );
};
export default Card;
