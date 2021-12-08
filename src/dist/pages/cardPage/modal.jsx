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
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='mySlides'>
          {data.img && (
            <div
              style={{
                position: "relative",
              }}>
              <img
                src={data.img ? data.img[currentSlide] : "fsdfsdfsd"}
                alt=''
                className='modal-img'
              />
              <div
                onClick={prevSlide}
                className='prev'
                style={{ display: currentSlide === 0 ? "none" : "block" }}>
                &#10094;
              </div>
              <div
                style={{
                  display: data.img
                    ? currentSlide === data.img.length - 1
                      ? "none"
                      : "block"
                    : "",
                }}
                onClick={nextSlide}
                className='next'>
                &#10095;
              </div>
              <span onClick={openModal} className='close cursor'>
                &times;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
