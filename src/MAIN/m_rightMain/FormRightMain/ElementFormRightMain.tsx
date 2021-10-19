import React, { useState } from "react";
import s from "./elementFormRightMain.module.css";
import checkBox from "../../imgMain/checkBox.svg";
import addPlas from "../../imgMain/addPlas.svg";

type TPropsElementChecbox = { mafemale: string };
export const ElementChecbox: React.FC<TPropsElementChecbox> = ({
  mafemale,
}) => {
  const [checkState, setCheckState] = useState(false);
  return (
    <label className={s._CheckboxLabel}>
      <input
        type="radio"
        name="mafemale"
        checked={checkState}
        onChange={() => setCheckState((prev) => !prev)}
      />
      <span>
        <img src={checkBox} alt="checkBox" />
      </span>

      <p>{mafemale}</p>
    </label>
  );
};
type TPropsElementInput = { title: string; placeholder: string };
export const ElementInput: React.FC<TPropsElementInput> = ({
  title,
  placeholder,
}) => {
  const [impState, setImpState] = useState("");
  return (
    <div className={s.elementInput}>
      <h2 className={s.formInpTitle}>{title}</h2>
      <input
        type="text"
        placeholder={placeholder}
        value={impState}
        onChange={(event) => setImpState(event.target.value)}
      />
    </div>
  );
};

type TPropsElementButton = { classes: string; buttonText: string };
export const ElementButton: React.FC<TPropsElementButton> = ({
  classes,
  buttonText,
}) => {
  return (
    <button
      className={classes == "buttonCansel" ? s.buttonCansel : s.buttonRed}
    >
      {buttonText}
    </button>
  );
};

type TPropsElementAdd = { textAdd: string };
export const ElementAdd: React.FC<TPropsElementAdd> = ({ textAdd }) => {
  return (
    <div className={s.formAdd}>
      <img src={addPlas} alt="addPlas" />
      <span>{textAdd}</span>
    </div>
  );
};
