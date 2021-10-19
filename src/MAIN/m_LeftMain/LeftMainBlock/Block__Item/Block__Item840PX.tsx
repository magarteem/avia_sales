import React from "react";
import s from "./block__Item840PX.module.css";
import { AirlinesElement, FlightTkElement, FlyElementOUT, TNEG6RElement } from "./Block__ItemLEFT";
import { BusinessElementIN, FlyElementIN, HourElementIN } from "./Block__ItemRIGHT";

const Block__Item840PX = () => {
  return (
    <div className={s._Item840PX} >
      <div className={s.with30Obj}>
        <div className={s._Obj_Left}>
          <FlyElementOUT />
          <HourElementIN />
        </div>
      </div>

      <div className={s.with30Obj}>
        <AirlinesElement />
        <TNEG6RElement />
        <FlightTkElement />
      </div>

      <div className={s.with30Obj}>
        <div className={s._Obj_Right}>
          <FlyElementIN />
          <BusinessElementIN />
        </div>
      </div>
    </div>
  );
};

export default Block__Item840PX;