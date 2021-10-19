import s from "./pasengerPhone.module.css";
import info from "../../imgMain/info.png";
import { ElementCompGray } from "../../ElementsMainBlock/ElementsMainBlock";
import { PhoneInputPassDetails } from "./PhoneInputPassDetails/PhoneInputPassDetails";
const CompGrayPassenger = () => {
  return (
    <div className={s._grayBlick}>
      <img src={info} alt="info" />
      <span>
        Please enter Emergency Contact, confirmation email and phone number
        fields are required!
      </span>
    </div>
  );
};

const PasengerPhone = () => {
  return (
    <div className={s._divCompDown}>
      <ElementCompGray textGray={<CompGrayPassenger />} />

      <h1 className={s._passengerH1}>Contact Person</h1>
      <div className={s._passDivFlex}>
        <div className={s._passDivFlexItems}>
          <p className={s._FlexItemsSelfP}>
            Please provide information about a contact person we should get in
            touch with in case of schedule change
          </p>
        </div>
        <div className={s._passDivFlexItemsMain}>
          <div className={s._passDivFlexItems}>
            <p className={s._passFlexP}>Confirmation email*</p>
            <input
              className={s._DivFlexInput}
              type="text"
              placeholder="Enter Confirmation Email"
            />
          </div>

          <div className={s._passDivFlexItems}>
            <p className={s._passFlexP}>Phone number*</p>
            <PhoneInputPassDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasengerPhone;
