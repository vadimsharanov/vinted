import React, { useEffect, useRef, useState } from "react";
import "./moterimsDropDown.scss";
const MoterimsDropDown = () => {
  const [open, setOpen] = useState(false);
  const openDropDown = (event) => {
    event.preventDefault();
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
    <div ref={ref} className='moterims-dropdown'>
      <button onClick={openDropDown} className='moterims-button'>
        Moterims
        {open && <div className='gavno'></div>}
      </button>
      <div className={open ? "moterims-content-yes" : "moterims-content-none"}>
        <div className='moterims-dropdown-all-levels'>
          <div className='moterims-first-level'>
            <span className='with-icon'>
              Peržiurėti viską
              <i class='fa fa-th' aria-hidden='true'></i>
            </span>
            <span>
              Drabužiai
              <i class='fas fa-tshirt' aria-hidden='true'></i>
            </span>
            <span>Batai</span>
            <span>Rankinės</span>
            <span>Aksesuarai</span>
            <span>Kosmetika</span>
          </div>
          <div className='moterims-second-level'>
            <span>Peržiurėti viską</span>
            <span>Megztiniai ir džemperiai</span>
            <span>2 Sukneles</span>
            <span>Marškiniai, palaidinės</span>
            <span>Kelnės ir tamprės</span>
            <span>Kombinezonai</span>
            <span>Apatinis trikotažas ir naktin...</span>
            <span>Aktyvaus laisvalaikio drabuž...</span>
            <span>Kiti drabužiai</span>
          </div>
          <div className='moterims-third-level'>
            <span>Paltai ir striukės</span>
            <span>Švarkeliai ir kostiumeliai</span>
            <span>Sijonai</span>
            <span>Džinsai</span>
            <span>Šortai</span>
            <span>Maudymukai</span>
            <span>Apranga nėštukėms</span>
            <span>Kostiumas, specializuota apr...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoterimsDropDown;
