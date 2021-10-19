import s from "./compTitleBillingDetails.module.css";
import info from "../imgMain/info.png";

export const CompTitleBillingDetails = () => {
  return (
    <div className={s._grayBlick}>
      <img src={info} title="info" />
      <h4>
        Your billing address must match exactly the address on your credit card
        statement.
      </h4>
    </div>
  );
};
