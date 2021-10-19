import React from "react";
import s from "./howHour.module.css";
import blackHour from '../../imgMain/blackHour.svg';

const HowHour = () => {
  return (
    <div className={s.howHour}>
      <img src={blackHour} alt="blackHour" />
      <span>2 h 30 min Layover in Istanbul</span>
    </div>
  );
};

export default HowHour;