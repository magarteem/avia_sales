import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneFildCards.css";

export const PhoneFildCards = () => {
  const [phoneCards, setPhoneCards] = useState("");

  const set = (value: string) => {
    console.log(value);
    setPhoneCards(value);
  };
  return (
    <PhoneInput
      containerClass="my-containerCards"
      buttonClass="my-buttonClassCard"
      inputClass="my-inputCards"
      dropdownClass="my-dropdownClassCards"
      value={phoneCards}
      onChange={set}
      preferredCountries={["md", "us", "de"]}
      placeholder="Enter Phone Number"
      country={"md"}
      //@ts-ignore
    />
  );
};
