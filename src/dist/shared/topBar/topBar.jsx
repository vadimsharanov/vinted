import React from "react";
import DropDown from "./dropDown";

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='nav-logo-container'>
        <img
          className='nav-logo'
          src='https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png'
          alt='vinted-logo'
        />
      </div>
      <div className='dropdown-container'>
        <DropDown></DropDown>
      </div>
      <div className='nav-buttons'>
        <button className='registration-button'>
          Registruotis | Prisijungti
        </button>
        <button className='new-product-button'>Įkelti prekę</button>
        <div className='question-button'>
          <a href='#'>
            <i class='fa fa-question-circle-o' aria-hidden='true'></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
