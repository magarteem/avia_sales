import React from "react";
import FooterDown from "./footerDown/FooterDown";
import FooterUP from "./footerUP/FooterUP";
import s from "./_podval.module.css";

const Podval = () => {
  return (
    <div className={s.footer}>
      <FooterUP />
      <FooterDown />
    </div>
  );
};

export default Podval;
