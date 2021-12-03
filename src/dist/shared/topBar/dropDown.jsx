import React, { useEffect, useRef, useState } from "react";
import "./dropDown.scss";

const DropDown = () => {
  const [content, setContent] = useState("Prekės");
  const [width, setWidth] = useState("70px");
  const [open, setOpen] = useState(false);
  const span = useRef();
  const [placeHolder, setPlaceHolder] = useState("Ieškoti prekių");
  const focuss = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    const textLength = span.current.outerText.length;
    setWidth(
      textLength < 10 ? textLength * 12.5 + "px" : textLength * 8.8 + 10 + "px"
    );
    switch (content) {
      case "Prekės":
        setPlaceHolder("Ieškoti prekių");
        break;
      case "Nariai":
        setPlaceHolder("Ieškoti narių");
        break;
      case "Forumas":
        setPlaceHolder("Ieškoti forume");
        break;
      case "Pagalbos centras":
        setPlaceHolder("Įvesk paieškos frazę");
        break;

      default:
        break;
    }
  }, [content]);
  let option = (e) => {
    setContent(e.target.textContent);
    setOpen(false);

    console.log(placeHolder);
  };

  return (
    <div className='select'>
      <div className='dropdown'>
        <button
          onClick={focuss}
          ref={span}
          className='dropbtn'
          style={{ width: width }}>
          {content}
          <span className='arrow'></span>
        </button>
        <div
          className={open ? "dropdown-content-yes" : "dropdown-content-none"}>
          <span onClick={option}>Prekės</span>
          <span onClick={option}>Nariai</span>
          <span onClick={option}>Forumas</span>
          <span onClick={option}>Pagalbos centras</span>
        </div>
      </div>
      <div className='input-icons'>
        <i className='fa fa-search icon' aria-hidden='true'></i>
        <input className='input-field' placeholder={placeHolder} type='text' />
      </div>
    </div>
  );
};

export default DropDown;
