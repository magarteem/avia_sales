import {
  ElementCompGray,
  Element_TitleComp,
} from "../ElementsMainBlock/ElementsMainBlock";
import s from "./billingDetails.module.css";
import { CompTitleBillingDetails } from "./compTitleBillingDetails";
import { FormBillingDetails } from "./FormBillingDetails/FormBillingDetails";
import { SecurityBillDetails } from "./SecurityBillDetails";

export const BillingDetails = () => {
  return (
    <section className={s.divLeftComp}>
      <Element_TitleComp title="Billing Details" />

      <div className={s._divCompDown}>
        <ElementCompGray textGray={<CompTitleBillingDetails />} />
        {/*  */}
        <FormBillingDetails />

        <SecurityBillDetails />
      </div>
    </section>
  );
};
