import React, { useEffect, useState } from "react";
import "./hamburgerMenu.scss";
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("none");

  const menuOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setStyle(open ? "block" : "none");
  }, [open]);
  return (
    <div className='container hamburger-menu'>
      {!open && (
        <div onClick={menuOpen} className='hamburger-menu-button'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {open && (
        <div onClick={menuOpen} className='hamburger-menu-close-button'>
          <div>X</div>
        </div>
      )}

      <div className='row ' style={{ display: style }}>
        <div className='col-12'>
          <div className='hamburger-menu-buttons'>
            <button className='hamburger-menu-new-product-button'>
              Įkelti prekę
            </button>
            <button className='hamburger-menu-registration-button'>
              Registruotis | Prisijungti
            </button>
            <button className='hamburger-menu-gidas-button'>
              Tavo Vinted gidas
            </button>
          </div>
          <div className='hamburger-menu-options'>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>Kategorijos</div>
              <div>Vyrams</div>
              <div>Vaikams</div>
              <div>Namams</div>
            </div>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>
                Sužinok daugiau
              </div>
              <div>Kaip veikia Vinted?</div>
              <div>Programėlė</div>
              <div>Pagalba</div>
              <div>Aktalu</div>
            </div>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>Apie Įmonę</div>
              <div>Apie Vinted</div>
              <div>Karjera</div>
              <div>Žiniasklaida</div>
              <div>Reklama</div>
            </div>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>Nuostatai</div>
              <div>Saugumo politika</div>
              <div>Privatumo politika</div>
              <div>Taisyklės</div>
              <div>Slapukų politika</div>
            </div>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>Privatumas</div>
              <div>Slapukų nustatymai</div>
            </div>
            <div className='hamburger-menu-options-categories'>
              <div className='hamburger-menu-options-title'>Bendruomenė</div>
              <div>Forumas</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
