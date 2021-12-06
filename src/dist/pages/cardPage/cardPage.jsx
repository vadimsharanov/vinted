import React from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./cardPage.scss";

const CardPage = () => {
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");
  const [user, data, brand, cat] = useFetch(productID);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xl-8 col-12 '>
          {data.img && data.img.length > 4 && (
            <div className='image-container-five'>
              <div className='item-a'>
                <img src={data.img ? data.img[0] : ""} alt='' />
              </div>
              <div className='item-b'>
                <img src={data.img ? data.img[1] : ""} alt='' />
              </div>
              <div className='item-c'>
                <img src={data.img ? data.img[2] : ""} alt='' />
              </div>
              <div className='item-d'>
                <img src={data.img ? data.img[3] : ""} alt='' />
              </div>
              <div className='item-e'>
                <img src={data.img ? data.img[4] : ""} alt='' />
              </div>
            </div>
          )}
          {data.img && data.img.length === 4 && (
            <div className='image-container-four'>
              <div className='item-a'>
                <img src={data.img ? data.img[0] : ""} alt='' />
              </div>
              <div className='item-b'>
                <img src={data.img ? data.img[1] : ""} alt='' />
              </div>
              <div className='item-c'>
                <img src={data.img ? data.img[2] : ""} alt='' />
              </div>
              <div className='item-d'>
                <img src={data.img ? data.img[3] : ""} alt='' />
              </div>
            </div>
          )}
          {data.img && data.img.length === 3 && (
            <div className='image-container-three'>
              <div className='item-a'>
                <img src={data.img ? data.img[0] : ""} alt='' />
              </div>
              <div className='item-b'>
                <img src={data.img ? data.img[1] : ""} alt='' />
              </div>
              <div className='item-c'>
                <img src={data.img ? data.img[2] : ""} alt='' />
              </div>
            </div>
          )}
          {/* {data.img && data.img.length === 2 && (
            <div className='image-container-two'>
              <div className='item-a'>
                <img src={data.img ? data.img[0] : ""} alt='' />
              </div>
              <div className='item-b'>
                <img src={data.img ? data.img[1] : ""} alt='' />
              </div>
            </div>
          )}
          {data.img && data.img.length === 1 && (
            <div className='image-container-one'>
              <div className='item-a'>
                <img src={data.img ? data.img[0] : ""} alt='' />
              </div>
            </div>
          )} */}
        </div>

        {/* <div className='col-12 col-md-4 card-page-main-information '>
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
        </div> */}
      </div>
    </div>
  );
};
export default CardPage;
