import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import "./dropDown.scss";

const DropDown = () => {
  const [content, setContent] = useState("Prekės");
  const [width, setWidth] = useState("70px");
  const [open, setOpen] = useState(false);
  const span = useRef();
  const smth = (e, da) => {};
  const focuss = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    console.log();
  }, [open]);
  let option = (e) => {
    setContent(e.target.textContent);
    setOpen(false);
    const textLength = span.current.outerText.length;
    setWidth(textLength < 10 ? textLength * 12.5 + "px" : textLength * 8.8);
  };

  const look = (e) => {
    console.log("hello");
    console.log(e.target);
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
          className={open ? "dropdown-content-yes" : "dropdown-content-none"}
          style={{ width: width }}>
          <span onClick={option}>Prekęs</span>
          <span onClick={option}>Nariai</span>
          <span onClick={option}>Forumas</span>
          <span onClick={option}>Pagalbos centras</span>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
{
  /* <select id='standard-select' ref={span} onChange={smth}>
        <option className='opcija' value='Option 1'>
          Prekės
        </option>
        <option onMouseOut={focuss} value='Option 2'>
          Nariai
        </option>
        <option value='Option 3'>Forumas</option>
        <option value='Option 4'>Pagalbos centras</option>
      </select>
      <span class='focus'></span> */
}
