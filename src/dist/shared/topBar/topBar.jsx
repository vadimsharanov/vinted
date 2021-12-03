import React from "react";
import DropDown from "./dropDown/dropDown";
import Select from "react-select";
import BottomNav from "./bottomNav/bottomNav";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const TopBar = () => {
  return (
    <div className='nav-bar'>
      <div className='top-nav-bar'>
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
            <a href=''>
              <i class='fa fa-question-circle-o' aria-hidden='true'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='horizontal-line'></div>
      <div style={{ position: "relative" }}>
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};
export default TopBar;
