import React from "react";
import s from "./elementsMainBlock.module.css";

type TPropsTitleComp = { title: string };
export const Element_TitleComp: React.FC<TPropsTitleComp> = ({ title }) => {
  return (
    <div className={s._divTitleComp}>
      <h1>{title}</h1>
    </div>
  );
};

type TPropsCompGray = { textGray: string | object };
export const ElementCompGray: React.FC<TPropsCompGray> = ({ textGray }) => {
  return <div className={s._compDownGray}>{textGray}</div>;
};

type TPropsClearText = { clearText: string | any };
export const ElementClearFild: React.FC<TPropsClearText> = ({ clearText }) => {
  return <div className={s.XXX_divCompDown}>{clearText}</div>;
};

export const CompGrayConfirm = () => {
  return (
    <div className={s._grayBlick}>
      <p>
        By clicking button “Confirm” I agree, that this amount will be charged
        in addition to the cost ofr the airline ticket(s).
      </p>
      <button>Confirm</button>
    </div>
  );
};
