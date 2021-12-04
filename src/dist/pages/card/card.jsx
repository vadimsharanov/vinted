import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./card.scss";
const noImage =
  "https://play-lh.googleusercontent.com/-KEUSBhEjA-A/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckWYBLYp6p7p5y1jMBaog7Wxvfw7g/photo.jpg";
const Card = ({ productID }) => {
  const [image, setImage] = useState("");
  const [user, data, brand, cat] = useFetch(productID);
  useEffect(() => {}, [user, data]);
  console.log(data.img === undefined);
  return (
    <Link
      to={`/products/${productID}`}
      className='product-card col-xl-3-5 col-lg-3  '>
      <div className='card-username'>
        <div className='card-avatar-container'>
          <img
            className='card-avatar-image'
            src={user.avatar ? user.avatar : noImage}
            alt=''
          />
        </div>
        <div>{user.name}</div>
      </div>
      <div className='card-product-image-container'>
        <img
          className='card-product-image'
          // src={data.img ? data.img[data.main_img] : "33"}
          alt=''
        />
      </div>
      <div className='card-product-feed-desc'>
        <div className='card-product-price-like'>
          <div className='card-product-price'>
            {data.price ? data.price : ""}
          </div>
          <div className='card-product-like'>
            2<i class='fa fa-heart-o' aria-hidden='true'></i>
          </div>
        </div>
        <div className='card-product-size-brand-container'>
          <div className='card-product-size'>
            {data.size ? data.size.join(" / ") : ""}
          </div>
          <div className='card-product-brand'>{brand.title}</div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
