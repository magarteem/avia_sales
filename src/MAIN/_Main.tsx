import React from "react";
import LeftMain from "./m_LeftMain/leftMain";
import RightMain from "./m_rightMain/rightMain";
import s from "./_main.module.css";

const Main = () => {
  return (
    <section className={s.mainGlobal}>
      <div className={s.main}>

        <LeftMain />

        <RightMain />

      </div>
    </section>
  );
};

export default Main;