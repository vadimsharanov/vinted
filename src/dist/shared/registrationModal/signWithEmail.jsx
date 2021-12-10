import React from "react";
import "./registrationModal.scss";
const SignWithEmail = ({ openSignModal }) => {
  return (
    <div className='registration-modal'>
      <div className='registration-modal-content'>
        <div onClick={openSignModal} className='reg-modal-close'>
          &times;
        </div>
        <h2 className='reg-modal-heading'>Prisijungti</h2>
        <div className='sign-methods'>
          <input placeholder='El. paštas arba vartotojo vardas' type='text' />
          <input placeholder='Slaptažodis' type='text' />
        </div>
        <button className='reg-modal-button'>Tęsti</button>
        <div className='reg-modal-bottom-text'>
          <span>
            Arba prisijunk su &nbsp;
            <span className='reg-modal-bottom-text-link'>El. pastu</span>
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
export default SignWithEmail;
