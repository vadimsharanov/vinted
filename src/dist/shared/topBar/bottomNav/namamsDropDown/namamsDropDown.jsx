import React, { useEffect, useRef, useState } from "react";
const NamamsDropDown = () => {
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };
  useEffect(() => {
    const myshka = (e) => {
      if (e.target.parentNode !== ref.current) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", myshka);
    return () => {
      document.removeEventListener("mousedown", myshka);
    };
  }, [open]);
  const ref = useRef("");
  return (
    <div ref={ref} className='namams-dropdown'>
      <button onClick={openDropDown} className='moterims-button'>
        Namams
        {open && <div className='gavno'></div>}
      </button>
      <div className={open ? "moterims-content-yes" : "moterims-content-none"}>
        <div className='moterims-dropdown-all-levels'>
          <div className='moterims-first-level'>
            <span className='with-icon'>
              Peržiūrėti viską
              <i className='fa fa-th' aria-hidden='true'></i>
            </span>
            <span>
              Drabužiai
              <i className='fas fa-tshirt' aria-hidden='true'></i>
            </span>
            <span>Tekstilė</span>
            <span>Interjero akcentai</span>
            <span>Stalo serviravimas</span>
            <span>Knygos</span>
          </div>
          <div className='moterims-second-level'>
            <span>Peržiūrėti viską</span>
            <span>Antklodės</span>
            <span>Dekoratyvinės pagalvės</span>
            <span>Staltiesės</span>
            <span>Rankšluoščiai</span>
          </div>
          <div className='moterims-third-level'>
            <span>Patalynė</span>
            <span>Užuolaidos</span>
            <span>Kilimeliai</span>
            <span>Dekoratyviniai audiniai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamamsDropDown;
