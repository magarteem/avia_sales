import React from "react";
import s from "./elementTravel.module.css";
import checkProtection from "../../imgMain/checkProtection.jpg";

type TPropsElementTravel = { textSpan: string; textP: string };
const ElementTravel: React.FC<TPropsElementTravel> = ({ textP, textSpan }) => {
  return (
    <div className={s.protectItemTravel}>
      <img src={checkProtection} alt="checkProtection" />

      <div className={s._ItemTravel}>
        <span>{textSpan}</span>
        <p>{textP}</p>
      </div>
    </div>
  );
};

export default ElementTravel;
