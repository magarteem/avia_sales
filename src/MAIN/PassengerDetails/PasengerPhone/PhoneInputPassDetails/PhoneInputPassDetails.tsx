import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneInputPassDetails.css";

export const PhoneInputPassDetails = () => {
  const [phone, setPhone] = useState("");

  const set = (value: string) => {
    console.log(value);
    setPhone(value);
  };

  return (
    <div className="phoneInputPassDetail">
      <PhoneInput
        containerClass="my-container"
        buttonClass="my-buttonClassPass"
        inputClass="my-inputPass"
        dropdownClass="my-dropdownClass"
        value={phone}
        onChange={set}
        preferredCountries={["md", "us", "de"]}
        placeholder="Enter Phone Number"
        country={"md"}
      />
    </div>
  );
};
