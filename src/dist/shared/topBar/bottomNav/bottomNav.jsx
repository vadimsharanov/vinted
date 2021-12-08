import React, { useRef } from "react";
import ApieMusDropDown from "./apieMusDropDown/apieMusDropDown";
import "./bottomNav.scss";
import MoterimsDropDown from "./moterimsDropDown/moterimsDropDown";
import NamamsDropDown from "./namamsDropDown/namamsDropDown";
import VaikamsDropDown from "./vaikamsDropDown/vaikamsDropDown";
import VyramsDropDown from "./vyramsDropDown/vyramsDropDown";
const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <MoterimsDropDown></MoterimsDropDown>

      <VyramsDropDown></VyramsDropDown>
      <VaikamsDropDown></VaikamsDropDown>
      <NamamsDropDown></NamamsDropDown>
      <ApieMusDropDown></ApieMusDropDown>
    </div>
  );
};
export default BottomNav;
