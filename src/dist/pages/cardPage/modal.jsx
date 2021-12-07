import React, { useEffect, useState } from "react";
import "./modal.scss";
const Modal = ({ data, openModal, chosenSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide !== data.img.length - 1 ? currentSlide + 1 : currentSlide
    );
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : currentSlide);
  };
  useEffect(() => {
    setCurrentSlide(chosenSlide);
  }, [chosenSlide]);
  console.log(chosenSlide);
  return (
    <div class='modal'>
      <span onClick={openModal} class='close cursor'>
        &times;
      </span>
      <div class='modal-content'>
        <div class='mySlides'>
          <div class='numbertext'>1 / 4</div>
          <img
            src={data.img ? data.img[currentSlide] : ""}
            style={{ width: "100%" }}
            alt=''
          />
        </div>

        <div onClick={prevSlide} class='prev'>
          &#10094;
        </div>
        <div onClick={nextSlide} class='next'>
          &#10095;
        </div>
      </div>
    </div>
  );
};
export default Modal;
