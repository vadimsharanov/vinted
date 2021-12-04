import React, { useState } from "react";
const NamamsDropDown = () => {
  const [open, setOpen] = useState(false);

  const atkroj = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };
  return (
    <div className='moterims-dropdown'>
      <button onClick={atkroj} className='moterims-button'>
        Namams
      </button>
      <div className={open ? "moterims-content-yes" : "moterims-content-none"}>
        <div className='moterims-dropdown-all-levels'>
          <div className='moterims-first-level'>
            <span className='with-icon'>
              Peržiūrėti viską
              <i class='fa fa-th' aria-hidden='true'></i>
            </span>
            <span>
              Drabužiai
              <i class='fas fa-tshirt' aria-hidden='true'></i>
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
