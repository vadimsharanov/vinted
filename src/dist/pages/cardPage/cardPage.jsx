import React from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./cardPage.scss";
const CardPage = () => {
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");
  const [user, data, brand, cat] = useFetch(productID);
  console.log(data);
  return (
    <div className='container cardpage'>
      <div className='row'>
        <div class='col-md-4 col-4'>
          <div style={{ height: "500px" }}>
            <img
              style={{ height: "500px", width: "100%" }}
              src={data.img ? data.img[0] : ""}
              alt=''
            />
          </div>
        </div>
        <div class='col-md-4' style={{ height: "250px" }}>
          <div style={{ height: "250px" }}>
            {" "}
            <img
              style={{ height: "240px", width: "100%" }}
              src={data.img ? data.img[1] : ""}
              alt=''
            />
          </div>
          <div style={{ height: "250px" }}>
            <img
              style={{ height: "250px", width: "100%" }}
              src={data.img ? data.img[2] : ""}
              alt=''
            />
          </div>
        </div>

        <div className='col-12 col-md-4 card-page-main-information '>
          <div className='card-page-price'>
            {data.price ? data.price.toFixed(2) + "€" : ""}
          </div>
          <div className='card-page-about-product'>
            {data.brand && (
              <div className='card-page-brand'>
                <div>PREKĖS ŽENKLAS</div>
                <div style={{ color: "#09B1BA" }}>{brand.title}</div>
              </div>
            )}
            {data.size && data.size.length > 0 && (
              <div className='card-page-size'>
                <div>DYDIS</div>
                <div>{data.size}</div>
              </div>
            )}
          </div>
          <div className='card-page-description'>
            {data.title && (
              <div className="card-page-title'">
                <div>{data.title}</div>
              </div>
            )}
            {data.desc && (
              <div className='card-page-desc'>
                <div>{data.desc}</div>
              </div>
            )}
          </div>
          <div className='card-page-buttons'>
            <button className='teirautis-pardavejo'>Teirautis pardavėjo</button>
            <button className='pazymeti'>Pažymeti</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPage;
