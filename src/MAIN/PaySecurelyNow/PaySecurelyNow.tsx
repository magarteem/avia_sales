import { ButtonPay } from "./componentPaySecurely/ButtonPay";
import { CheckBoxPay } from "./componentPaySecurely/CheckBoxPay";
import s from "./paySecurelyNow.module.css";

export const PaySecurelyNow = () => {
  return (
    <section className={s.paySecurelyNow}>
      <CheckBoxPay />
      <ButtonPay />
    </section>
  );
};
