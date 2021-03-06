import React, { useEffect, useState } from "react";
import DropDown from "./dropDown/dropDown";
import "./topBar.scss";
import BottomNav from "./bottomNav/bottomNav";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu/hamburgerMenu";
import RegistrationModal from "../registrationModal/registrationModal";
import SignWithEmail from "../registrationModal/signWithEmail";
const TopBar = () => {
  const [regModal, setRegModal] = useState(false);
  const [emailSign, setEmailSign] = useState(false);
  const openModal = () => {
    setRegModal(!regModal);
  };
  const openSignModal = () => {
    setEmailSign(!emailSign);
    setRegModal(false);
  };
  useEffect(() => {
    let body = document.getElementsByTagName("body");
    if (regModal || emailSign) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "";
    }
  }, [regModal, emailSign]);
  return (
    <>
      <div
        className='reg-modal-container'
        style={{ display: regModal ? "block" : "none" }}>
        <RegistrationModal
          openSignModal={openSignModal}
          openModal={openModal}></RegistrationModal>
      </div>
      <div
        className='reg-modal-container'
        style={{ display: emailSign ? "block" : "none" }}>
        <SignWithEmail openSignModal={openSignModal}></SignWithEmail>
      </div>
      <div className='hamburger-navigation'>
        <div className='nav-logo-container'>
          <img
            className='nav-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png'
            alt='vinted-logo'
          />
        </div>
        <div className='hamburger-container'>
          <HamburgerMenu></HamburgerMenu>
        </div>
        <div className='col-12 col-xl-7 col-lg-6 col-md-12 col-sm-12 dropdown-container'>
          <DropDown></DropDown>
        </div>
      </div>
      <div className='nav-bar container'>
        <div className='row top-nav-bar'>
          <div className='col-12 col-xl-1 col-lg-2 col-md-12 col-sm-12 '>
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

          <div className='col-12 col-xl-7 col-lg-6 col-md-12 col-sm-12 dropdown-container'>
            <DropDown></DropDown>
          </div>
          <div className='col-4 col-xl-4 col-lg-4 col-md-4 nav-buttons'>
            <button onClick={openModal} className='registration-button'>
              Registruotis | Prisijungti
            </button>
            <button className='new-product-button'>??kelti prek??</button>
            <div className='question-button'>
              <i className='fa fa-question-circle-o' aria-hidden='true'></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='horizontal-line'></div>
            <div className='bottom-nav-container'>
              <BottomNav></BottomNav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TopBar;
