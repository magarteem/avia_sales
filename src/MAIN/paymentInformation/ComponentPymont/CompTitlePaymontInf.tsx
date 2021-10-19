import s from "./compTitlePaymontInf.module.css";
import payInformationvel from "../../imgMain/payInformation.png";
import visa from "../../../PODVAL/imgFooter/visa.jpg";
import masterKard from "../../../PODVAL/imgFooter/masterKard.jpg";
import discover from "../../../PODVAL/imgFooter/discover.jpg";
import amx2 from "../../../PODVAL/imgFooter/amx2.jpg";

export const TitlePaymontFlags = () => {
  return (
    <>
      <img src={visa} alt="visa" />
      <img src={masterKard} alt="masterKard" />
      <img src={discover} alt="discover" />
      <img src={amx2} alt="amx2" />
    </>
  );
};

export const CompTitlePaymontInf = () => {
  return (
    <div className={s._grayBlick}>
      <div className={s._grayBlickLeft}>
        <img src={payInformationvel} alt="payInformationvel" />
        <span>All transactions are secure and encrypted.</span>
      </div>

      <div className={s._grayBlickRight}>
        <TitlePaymontFlags />
      </div>
    </div>
  );
};
