import React, { useEffect, useRef, useState } from "react";
const VaikamsDropDown = () => {
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
    <div ref={ref} className='vaikams-dropdown'>
      <button onClick={openDropDown} className='moterims-button'>
        {open && <div className='gavno'></div>}
        Vaikams
      </button>
      <div className={open ? "moterims-content-yes" : "moterims-content-none"}>
        <div className='moterims-dropdown-all-levels'>
          <div className='moterims-first-level'>
            <span className='with-icon'>
              Peržiūrėti viską
              <i class='fa fa-th' aria-hidden='true'></i>
            </span>
            <span>Apranga mergaitėms</span>
            <span>Apranga berniukams</span>
            <span>Žaislai, žaidimai</span>
            <span>Kūdikių ir vaikų priežiūra</span>
            <span>Vežimukai</span>
            <span>Judėjimo priemonės</span>
            <span>Kedutės</span>
            <span>Baldai vaikams</span>
            <span>Mokyklos reikmenys</span>
            <span>Visa kita</span>
          </div>
          <div className='moterims-second-level'>
            <span>Peržiūrėti viską</span>
            <span>Avalynė</span>
            <span>Megztiniai, džemperiai</span>
            <span>Suknelės</span>
            <span>Kelnės ir šortai</span>
            <span>Aksesuarai</span>
            <span>Apatiniai ir kojinės</span>
            <span>Sportinė apranga</span>
            <span>Dvynukams, trynukams</span>
            <span>Proginė apranga</span>
          </div>
          <div className='moterims-third-level'>
            <span>Kūdikėliams</span>
            <span>Lauko drabužiai</span>
            <span>Marškiniai, palaidinės</span>
            <span>Sijonukai</span>
            <span>Rankinės, kuprinytės</span>
            <span>Maudymosi apranga</span>
            <span>Miego apranga</span>
            <span>Urmu</span>
            <span>Karnavaliniai kostiumai</span>
            <span>Kiti drabužiai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaikamsDropDown;
