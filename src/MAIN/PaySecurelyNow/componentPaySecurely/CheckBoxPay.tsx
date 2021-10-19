import s from "./checkBoxPay.module.css";
import vectorRed from "../../imgMain/vectorRed.svg";

export const CheckBoxPay = () => {
  return (
    <div className={s.checkBoxPay}>
      <label className={s.сheckBoxStyle}>
        <input type="checkbox" />
        <img src={vectorRed} alt="vectorRed" />
      </label>
      <span className={s.checkBoxText}>
        By checking this box I affirm that I have read, understood and accepted
        present{" "}
        <span className={s.checkBoxTextSelect}>
          Terms and Conditions, Privacy Policy{" "}
        </span>
        and{" "}
        <span className={s.checkBoxTextSelect}>
          airline liability limitations
        </span>
        , confirmed the accuracy of flight itinerary, and verified the spelling
        of the name(s) of the passenger (s) to be matching passenger(s)
        passport(s) /{" "}
        <span className={s.checkBoxTextSelect}>valid travel document(s)</span>,
        as well as I have taken the consent of Credit Card Holder and all the
        passengers regarding the{" "}
        <span className={s.checkBoxTextSelect}>Terms and Conditions</span> and{" "}
        <span className={s.checkBoxTextSelect}>Privacy Policy</span>.
      </span>
      <span className={s.checkBoxTextSelect}></span>
    </div>
  );
};
