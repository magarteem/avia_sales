import s from "./securityBillDetails.module.css";
import msAfee from "../imgMain/msAfee.jpg";
import thawte from "../imgMain/thawte.jpg";
import Norton from "../imgMain/Norton.jpg";

export const SecurityBillDetails = () => {
  return (
    <div className={s.securityBillDetails}>
      <img src={msAfee} alt="msAfee" />
      <img src={thawte} alt="thawte" />
      <img src={Norton} alt="Norton" />
    </div>
  );
};
