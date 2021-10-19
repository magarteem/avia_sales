import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneBillingDetails.css";

export const PhoneBillingDetails = () => {
  const [phoneBillingDetails, setPhoneBillingDetails] = useState("");

  const set = (value: string) => {
    console.log(value);
    setPhoneBillingDetails(value);
  };
  return (
    <PhoneInput
      containerClass="my-containerBilling"
      buttonClass="my-buttonBilling"
      inputClass="my-inputBilling"
      dropdownClass="my-dropdownBilling"
      value={phoneBillingDetails}
      onChange={set}
      preferredCountries={["md", "us", "de"]}
      placeholder="Enter Phone Number"
      country={"md"}
    />
  );
};
