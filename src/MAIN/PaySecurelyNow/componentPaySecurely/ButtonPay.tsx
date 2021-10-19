import s from "./buttonPay.module.css";
import zamock from "../../imgMain/zamock.png";

export const ButtonPay = () => {
  return (
    <button className={s.buttonPay}>
      <div className={s.buttonPayInButton}>
        <img src={zamock} alt="zamock.png" />
        <span>Pay securely now</span>
      </div>
    </button>
  );
};
