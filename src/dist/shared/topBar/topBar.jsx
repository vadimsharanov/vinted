import React from "react";
import DropDown from "./dropDown/dropDown";
import "./topBar.scss";
import BottomNav from "./bottomNav/bottomNav";
import { Link } from "react-router-dom";
const TopBar = () => {
  // link;
  return (
    <div className='nav-bar container'>
      <div className='row top-nav-bar'>
        <div className='col-12 col-xl-2 col-lg-2 col-md-12 col-sm-12 '>
          <Link to='/'>
            <div className='nav-logo-container'>
              <img
                className='nav-logo'
                src='https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png'
                alt='vinted-logo'
              />
            </div>
          </Link>
        </div>
        <div className='col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 dropdown-container'>
          <DropDown></DropDown>
        </div>
        <div className='col-4 col-xl-4 col-lg-4 col-md-4'>
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
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='horizontal-line'></div>
          <BottomNav></BottomNav>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
{
}
