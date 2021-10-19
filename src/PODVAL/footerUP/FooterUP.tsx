import React from "react";
import s from "./footerUP.module.css";

const FooterUP = () => {
  return (
    <div className={s.footerUP}>
      <div className={s.footerUP_L}>
        <h1>$ 1 563,00</h1>
        <span>Total price for all passengers</span>
      </div>

      <div className={s.footerUP_R}>
        <h2>Book</h2>
        <span></span>
        <h2>23:56:12</h2>
      </div>
    </div>
  );
};

export default FooterUP;
