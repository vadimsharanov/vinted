import React, { useEffect, useState } from "react";
import "./globalFeed.scss";
import { API } from "../../shared/api";
import axios from "axios";
import SingleProduct from "../card/card";
import Hero from "../../shared/hero/hero";
const GlobalFeed = () => {
  const [news, setNews] = useState("");
  const apiUrl = `${API}/news/`;

  useEffect(() => {
    getProductID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getProductID() {
    try {
      const news = await axios.get(apiUrl);
      setNews(news.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!news) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='global-feed'>
      <Hero></Hero>
      <div className='container-feed container '>
        <div className='row-feed product-container row'>
          {news.map((item) => (
            <SingleProduct productID={item.id} key={item.id}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GlobalFeed;
