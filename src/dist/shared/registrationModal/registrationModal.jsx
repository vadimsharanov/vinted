import React from "react";
import "./registrationModal.scss";
const RegistrationModal = ({ openModal, openSignModal }) => {
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
          <span>
            Arba prisijunk su &nbsp;
            <span
              onClick={openSignModal}
              className='reg-modal-bottom-text-link'>
              El. pastu
            </span>
          </span>
          <span>
            Dar neturi paskyros? &nbsp;
            <span className='reg-modal-bottom-text-link'>
              Registruotis{" "}
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
export default RegistrationModal;
