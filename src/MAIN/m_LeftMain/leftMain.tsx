import React from "react";
import s from "./leftMain.module.css";
import LeftMainBlock from "./LeftMainBlock/LeftMainBlock";
import rightLink from "../imgMain/rightLink.svg";
import leftLink from "../imgMain/leftLink.svg";
import PassengerDetails from "../PassengerDetails/PassengerDetails";
import { ElementClearFild } from "../ElementsMainBlock/ElementsMainBlock";
import PasengerPhone from "../PassengerDetails/PasengerPhone/PasengerPhone";
import TravelProtection from "../TravelProtection/TravelProtection";
import RecommendedTravel from "../TravelProtection/RecommendedTravel/RecommendedTravel";
import DidYouKnow from "../didYouKnow/DidYouKnow";
import { PaymentInformation } from "../paymentInformation/PaymentInformation";
import { BillingDetails } from "../BillingDetails/BilingDetails";
import { MettYouRexpectations } from "../mettYouRexpectations/MettYouRexpectations";
import { PaySecurelyNow } from "../PaySecurelyNow/PaySecurelyNow";

const LeftMain = () => {
  return (
    <div className={s.main_left}>
      <LeftMainBlock imgLink={rightLink} />
      <LeftMainBlock imgLink={leftLink} />

      <PassengerDetails />
      <section className={s.pasengerPhoneGlobal}>
        <ElementClearFild clearText={<PasengerPhone />} />
      </section>

      <TravelProtection />
      <section className={s.pasengerPhoneGlobal}>
        <ElementClearFild clearText={<RecommendedTravel />} />
      </section>

      <DidYouKnow />

      <PaymentInformation />

      <BillingDetails />

      <MettYouRexpectations />

      <PaySecurelyNow />
    </div>
  );
};

export default LeftMain;
