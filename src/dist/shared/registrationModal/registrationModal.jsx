import React from "react";
import "./registrationModal.scss";
const RegistrationModal = ({ openModal }) => {
  return (
    <div className='registration-modal'>
      <div className='registration-modal-content'>
        <div onClick={openModal} className='reg-modal-close'>
          &times;
        </div>
        <h2 className='reg-modal-heading'>Labas!</h2>
        <div className='sign-methods'>
          <div>
            <i className='fa fa-facebook-official'></i>
            Tęsti su Facebook
          </div>
          <div>
            <i className='fa fa-google 	'></i>
            Tęsti su Google
          </div>
          <div>
            <i className='fa fa-apple'></i>
            Tęsti su Apple
          </div>
        </div>
        <div className='reg-modal-bottom-text'>
          <span>Arba prisijunk su EL pastu</span>
          <span>Dar neturi paskyros? Registruotis </span>
        </div>
      </div>
    </div>
  );
};
export default RegistrationModal;
