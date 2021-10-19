import React from "react";
import s from "./block__ItemLEFT.module.css";
import redChaika from '../../../imgMain/redChaika.png';
import flaySeroe from '../../../imgMain/flaySeroe.svg';
import flayBlackUP from '../../../imgMain/flayBlackUP.svg';

//export const AirlinesElement = () => {
//  return (
//    <>
//      <div className={s.___itemL1UP}>
//        <img src={redChaika} alt="redChaika" />
//        <p>Turkish Airlines</p>
//      </div>
//      <div className={s.___itemL1Down}>
//        <img src={flaySeroe} alt="flaySeroe" />
//        <span>Flight <span>TK-442</span></span>
//      </div>
//    </>
//  );
//};
export const AirlinesElement = () => {
  return (
    <div className={s.___itemL1UP}>
      <img src={redChaika} alt="redChaika" />
      <p>Turkish Airlines</p>
    </div>

  );
};
export const FlightTkElement = () => {
  return (
    <div className={s.___itemL1Down}>
      <img src={flaySeroe} alt="flaySeroe" />
      <span>Flight <span>TK-442</span></span>
    </div>
  );
};
export const FlyElementOUT = () => {
  return (
    <div className={s.___itemL2UP}>
      <div className={s.___itemL2UPdiv}>
        <img src={flayBlackUP} alt="flayBlackUP" />
        <span>Departure</span>
      </div>
      <p>28 Feb 9:50 </p>
      <span>Lviv (LWO)</span>
    </div>
  );
};
export const TNEG6RElement = () => {
  return (
    <div className={s.___itemL2Down}>
      <span>TNEG6R</span>
    </div>
  );
};


const Block__ItemLEFT = () => {
  return (
    <div className={s.___itemL + " " + s.with50Obj}>
      <div className={s.___itemL1 + " " + s.with50Obj}>
        <AirlinesElement />
        <FlightTkElement />

      </div>
      <div className={s.___itemL2 + " " + s.with50Obj}>
        <FlyElementOUT />
        <TNEG6RElement />
      </div>
    </div>
  );
};

export default Block__ItemLEFT;