import React, { useState } from "react";
import "./apieMusDropDown.scss";
const ApieMusDropDown = () => {
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
        Apie mus
      </button>
      <div className={open ? "moterims-content-yes" : "moterims-content-none"}>
        <div className='apie-mus-dropdown-all-levels'>
          <div className='apie-mus-first-level'>
            <div className='apie-mus-first-level-div'>Sužinok daugiau</div>
            <span className='with-icon'>Kaip veikia Vinted?</span>
            <span>Programėlė</span>
            <span>Pagalba</span>
            <span>Aktualu</span>
            <div className='apie-mus-first-level'>
              <div className='apie-mus-first-level-div'>Apie įmonę</div>
              <span>Apie Vinted</span>
              <span>Karjera</span>
              <span>Žiniasklaida</span>
              <span>Reklama</span>
            </div>
          </div>
          <div className='apie-mus-first-level'>
            <div className='apie-mus-first-level-div'>Nuostatai</div>
            <span className='with-icon'>Saugumo politika</span>
            <span className='with-icon'>Privatumo politika</span>
            <span className='with-icon'>Taisyklės</span>
            <span className='with-icon'>Slapukų politika</span>
            <div className='apie-mus-first-level'>
              <div className='apie-mus-first-level-div'>Privatumas</div>
              <span>Slapukų nustatymai</span>
            </div>
          </div>
          <div className='apie-mus-first-level'>
            <div className='apie-mus-first-level-div'>Bendruomenė</div>
            <span className='with-icon'>Forumas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApieMusDropDown;
