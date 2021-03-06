import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useFetch from "../../hooks/useFetch";
import "./cardPage.scss";
import Modal from "./modal";
import "./cardPageGrid.scss";

const CardPage = () => {
  const location = useLocation().pathname;
  const productID = location.split("/products/").join("");
  const [, data, brand] = useFetch(productID);
  const [modal, setModal] = useState("modal-container-hidden");
  const [chosenSlide, setChosenSlide] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [gridStyle, setGridStyle] = useState("");
  console.log(data.size);
  useEffect(() => {
    switch (data.img ? data.img.length : "") {
      case 5:
        setGridStyle("five");
        break;
      case 4:
        setGridStyle("four");
        break;
      case 3:
        setGridStyle("three");
        break;
      case 2:
        setGridStyle("two");
        break;
      case 1:
        setGridStyle("one");
        break;

      default:
        break;
    }
  }, [data]);
  const open = (slide) => {
    setChosenSlide(slide);
    setIsOpen(!isOpen);
    setModal(!isOpen ? "modal-container-visible" : "modal-container-hidden");
  };
  return (
    <div className='container cardpage '>
      <div className='row '>
        <div className={modal}>
          <Modal chosenSlide={chosenSlide} openModal={open} data={data}></Modal>
        </div>
        <div className='col-xl-8 col-12 '>
          {data.img && data.img.length > 5 && (
            <div className='image-container-five'>
              {data.img.map((item, index) => {
                if (index > 5) {
                  return "";
                }
                if (index === 5) {
                  return (
                    <div className='item-e' onClick={() => open(4)}>
                      <span className='image-more'>+{data.img.length - 4}</span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`item-${String.fromCharCode(index + 97)}`}
                      onClick={() => open(index)}>
                      <img src={data.img ? item : ""} alt='' />
                    </div>
                  );
                }
              })}
            </div>
          )}
          {data.img && data.img.length <= 5 && (
            <div className={`image-container-${gridStyle}`}>
              {data.img.map((item, index) => (
                <div
                  className={`item-${String.fromCharCode(index + 97)}`}
                  onClick={() => open(index)}>
                  <img src={data.img ? item : ""} alt='' />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='col-12 col-md-3 card-page-main-information '>
          <div className='card-page-price'>
            {data.price ? data.price.toFixed(2) + "???" : ""}
          </div>
          <div className='card-page-about-product'>
            {data.brand && (
              <div className='card-page-brand'>
                <div>PREK??S ??ENKLAS</div>
                <div style={{ color: "#09B1BA" }}>{brand.title}</div>
              </div>
            )}
            {data.size && data.size.length > 0 && (
              <div className='card-page-size'>
                <div>DYDIS</div>
                <div>{data.size ? data.size.join(" / ") : ""}</div>
                <div>
                  <i class='fa fa-info-circle' aria-hidden='true'></i>
                </div>
              </div>
            )}
            <div>
              <div>VIETOV??</div>
              <div>LIETUVA</div>
            </div>
            <div>
              <div>BUKL??</div>
              <div>LABAI GERA</div>
            </div>
            <div>
              <div>??KELTA</div>
              <div>PRIE?? 1 DIEN??</div>
            </div>
            <div>
              <div>MOK??JIMO B??DAI</div>
              <div>MOK??JIMO KORTEL??</div>
            </div>
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
            <button className='teirautis-pardavejo'>Teirautis pardav??jo</button>
            <button className='pazymeti'>Pa??ymeti</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPage;
