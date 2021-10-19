import React from "react";
import { ElementAdd } from "../../m_rightMain/FormRightMain/ElementFormRightMain";
import { ElemChecboxPass, ElemInputPass } from "./ElementFormPas";
import s from "./formPassenger.module.css";

const FormPasenger = () => {
  const plaseInp = [
    "Select Seat Preference",
    "Select Meal Preference",
    "Select Special Assistance",
    "Select Frequent Flyer",
    "Program Number",
  ];

  const classAdd = {
    classP: {
      paddingLeft: "14px",
      fontFamily: "PTRootUIWebBold",
      fontSize: "21px",
    },
  };

  return (
    <form className={s.formPasenger}>
      <div className={s.elemInpPassUP}>
        <ElemChecboxPass classAdd={classAdd} place="Redress number" />
        <div className={s.elemInpPassUP_up}>
          <ElemInputPass placeholder="Enter Number" />
        </div>
      </div>
      {/*  */}
      <div>
        <ElemChecboxPass
          classAdd={classAdd}
          place="Frequent flyer and seat/meal preferences"
        />
        <div className={s.formPassDown}>
          {plaseInp.map((elem, index) => (
            <div className={s._PassDownSpan}>
              <ElemInputPass key={index} placeholder={elem} />
            </div>
          ))}
          <button className={s.elemButtonPass}>
            <ElementAdd textAdd="Add Program Number" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormPasenger;
