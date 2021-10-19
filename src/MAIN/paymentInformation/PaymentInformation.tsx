import {
  ElementCompGray,
  Element_TitleComp,
} from "../ElementsMainBlock/ElementsMainBlock";
import s from "./paymentInformation.module.css";
import { CompTitlePaymontInf } from "./ComponentPymont/CompTitlePaymontInf";
import { FormPyment } from "./ComponentPymont/formPyment/FormPyment";

export const PaymentInformation = () => {
  return (
    <section className={s.divLeftComp}>
      <Element_TitleComp title="Payment Information" />

      <div className={s._divCompDown}>
        <ElementCompGray textGray={<CompTitlePaymontInf />} />
        {/*  */}
        <div className={s.kreditIN}>
          <h1>Credit/Debit Card Information</h1>

          <FormPyment />
        </div>
      </div>
    </section>
  );
};
