import React from "react";
import s from "./titleRightMain.module.css";

const TitleRightMain = () => {
  return (
    <>
      <div className={s.__rightTitleUP}>
        <h1>Passenger details</h1>
      </div>

      <div className={s.__rightTitleDOWN}>
        <h2>Passenger</h2>
      </div>
    </>
  );
};

export default TitleRightMain;