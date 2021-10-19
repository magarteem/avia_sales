import React from "react";
import s from "./block__ItemRIGHT.module.css";
import flayBlackUP from '../../../imgMain/flayBlackUP.svg';
import hour from '../../../imgMain/hour.svg';
import styl from '../../../imgMain/styl.svg';

export const FlyElementIN = () => {
  return (
    <div className={s.___itemR2UP}>
      <div className={s.___itemR2UPdiv}>
        <img src={flayBlackUP} alt="flayBlackUP" />
        <span>Arrival</span>
      </div>
      <p>28 Feb 12:50</p>
      <span>Istanbul (IST)</span>
    </div>
  );
};
export const HourElementIN = () => {
  return (
    <div className={s.___itemR1Down}>
      <img src={hour} alt="hour" />
      <span>2 hours</span>
    </div>
  );
};
export const BusinessElementIN = () => {
  return (
    <div className={s.___itemR1Down}>
      <span className={s.___itemR1Down575PX}>Business</span>
      <img src={styl} alt="styl" />
      <span className={s.___itemR1DownMaxPX}>Business Class</span>

    </div>
  );
};


const Block__ItemRIGHT = () => {
  return (
    <div className={s.___itemR + " " + s.with50Obj}>
      <div className={s.___itemR2 + " " + s.with50Obj}>
        <FlyElementIN />
        <HourElementIN />
      </div>
      <div className={s.___itemR1 + " " + s.with50Obj}>
        <BusinessElementIN />
      </div>
    </div>
  );
};

export default Block__ItemRIGHT;