import React from "react";
import s from "./elementFormPas.module.css";
import checkBox from "../../imgMain/checkBox.svg";
import { useState } from "react";

type TPropsElementChecbox = { place: string; classAdd?: any };
export const ElemChecboxPass: React.FC<TPropsElementChecbox> = ({
  place,
  classAdd,
}) => {
  const [checkPassState, setCheckPassState] = useState(false);
  return (
    <label style={classAdd.classSpan} className={s._CheckboxPass}>
      <input
        type="checkbox"
        name="adress"
        checked={checkPassState}
        onChange={() => setCheckPassState((prev) => !prev)}
      />
      <span style={window.innerWidth < 767 ? classAdd.classSpanChecked : null}>
        <img src={checkBox} alt="checkBox" />
      </span>

      <p style={classAdd.classP}>{place}</p>
    </label>
  );
};

type TPropsElementInput = { placeholder: string };
export const ElemInputPass: React.FC<TPropsElementInput> = ({
  placeholder,
}) => {
  const [impStatePass, setImpStatePass] = useState("");
  return (
    <div className={s.elemInpPass}>
      <input
        type="text"
        placeholder={placeholder}
        value={impStatePass}
        onChange={(event) => setImpStatePass(event.target.value)}
      />
    </div>
  );
};
