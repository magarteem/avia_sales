import React from "react";
import s from './_h_UpMainDown.module.css';
import logo from './imgHead/logo.jpg';
import photo from './imgHead/photo.jpg';

const H_Up = () => {
  return (
    <div className={s.h_up}>
      <a href="#">
        <img className={s.h_upLogo} src={logo} alt="logo" />
      </a>

      <nav className={s.h_up___nav}>
        <a>About</a>
        <a>Reviews</a>
        <a>Privacy Policy</a>
        <a>Terms & Conditions</a>
      </nav>

      <div className={s.h_up___right}>
        <div className={s.__right_kontakt}>
          <span>edward@priorityflyers.com</span>
          <span>415-854-2675</span>
        </div>

        <div className={s._center}></div>

        <div className={s.__right}>
          <div className={s.__right_name}>
            <span>Travel Agent</span>
            <span>Edward Nixon</span>
          </div>
          <div className={s.__right_photo}>
            <img src={photo} alt="photo" />
          </div>
        </div>

      </div>

    </div>
  );
};

export default H_Up;
