import React from "react";
import FormRightMain from "./FormRightMain/FormRightMain";
import s from "./rightMain.module.css";
import TitleRightMain from "./TitleRightMain";

const RightMain = () => {
  return (
    <div className={s.main_right}>

      <TitleRightMain />

      <FormRightMain />

    </div>
  );
};

export default RightMain;