import React, { useEffect, useRef, useState } from "react";
const VyramsDropDown = () => {
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
    <div ref={ref} className='vyrams-dropdown'>
      <button onClick={openDropDown} className='moterims-button'>
        Vyrams
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
            <span>Batai</span>
            <span>Aksesuarai</span>
            <span>Kosmetika</span>
          </div>
          <div className='moterims-second-level'>
            <span>Peržiūrėti viską</span>
            <span>Paltai ir striukės</span>
            <span>Kostiumai ir švarkai</span>
            <span>Kelnės</span>
            <span>Apatinis trikotažas, kojinės</span>
            <span>Sportinė apranga ir akseua...</span>
            <span>Kiti drabužiai</span>
          </div>
          <div className='moterims-third-level'>
            <span>Džinsai</span>
            <span>Marškiniai, marškineliai</span>
            <span>Megztiniai, džemperiai</span>
            <span>Šortai</span>
            <span>Maudymosi glaudės</span>
            <span>Teminė apranga</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VyramsDropDown;
