import React from "react";
import { useState } from "react";
import s from "./elementRadioRecomendedTravel.module.css";

type TPropsElementRadio = { textP: string; textA: string };
export const ElementRadioRecomendedTravel: React.FC<TPropsElementRadio> = ({
  textP,
  textA,
}) => {
  const [RadioRecomendedTravel, setRadioRecomendedTravel] = useState(false);
  return (
    <label className={s._RadioLabel}>
      <input
        type="radio"
        name="text"
        checked={RadioRecomendedTravel}
        onChange={() => setRadioRecomendedTravel((prev) => !prev)}
      />
      <span></span>

      <p>
        {textP}
        <a href="#"> {textA}</a>
      </p>
    </label>
  );
};
