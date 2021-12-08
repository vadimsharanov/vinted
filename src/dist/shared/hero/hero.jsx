import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className='hero-background'>
      <div className='div container'>
        <div className='div row'>
          <div className='div col-12'>
            <div className='hero-window'>
              <h1 className='hero-title'>
                Atėjo metas atlaisvinti vietos spintoje?
              </h1>
              <button className='hero-window-button'>Įkelti prekę</button>
              Sužinok, kaip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
