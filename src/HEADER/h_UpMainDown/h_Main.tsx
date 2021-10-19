import React from "react";
import s from './_h_UpMainDown.module.css';
import H_Main_items from "./mainItem";

const H_Main = () => {
  return (
    <div className={s.h_main}>
      <div className={s.h_main1280px}>
        <div className={s.h_up__left}>
          <h1>Please, choose the flight and check passenger details</h1>
          <h3>Tickets at a good price are almost in your hands!</h3>
        </div>

        <H_Main_items />
      </div>
    </div>
  );
};

export default H_Main;
