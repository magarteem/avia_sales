import { Element_TitleComp } from "../ElementsMainBlock/ElementsMainBlock";
import s from "./passengerDetails.module.css";
import FormPasenger from "./FormPasenger/FormPasenger";
import PassDataOrEdit from "./passDataOrEdit/PassDataOrEdit";

const PassengerDetails = () => {
  return (
    <section className={s.divLeftComp}>
      <Element_TitleComp title="Passenger Details" />
      <div className={s._divCompDown}>
        <PassDataOrEdit />

        <FormPasenger />
      </div>
    </section>
  );
};

export default PassengerDetails;
