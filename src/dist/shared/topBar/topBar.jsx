import React from "react";

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
      {/* <div className='nav-selector-search'>
        <select name='' id=''>
          <i class='fa fa-caret-down' aria-hidden='true'></i>
          <option value='volvo'>Volvo</option>
          <option value='saab'>Saab</option>
          <option value='mercedes'>Mercedes</option>
          <option value='audi'>Audi</option>
        </select>
        <input type='text' />
      </div> */}

      <div className='nav-buttons'>
        <button>Registruotis | Prisijungti</button>
        <button>Įkelti prekę</button>
        <div></div>
      </div>
    </div>
  );
};
export default TopBar;
