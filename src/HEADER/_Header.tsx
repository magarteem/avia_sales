import React from "react";
import s from "./_header.module.css";
import H_Down from "./h_UpMainDown/h_Down";
import H_Main from "./h_UpMainDown/h_Main";
import H_Up from "./h_UpMainDown/h_Up";


const Header = () => {
  return (
    <div className={s.headerGlobal}>
      <div className={s.header}>
        <H_Up />
        <H_Main />
        <H_Down />
      </div>
    </div>
  );
};

export default Header;
