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
    console.log(open);
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

export default NamamsDropDown;
