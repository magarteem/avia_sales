import React from "react";
import s from "./recommendedTravel.module.css";
import recomendedImg from "../../imgMain/recomendedImg.jpg";
import { ElementRadioRecomendedTravel } from "./ElementRadioRecomendedTravel";

const RecommendedTravel = () => {
  let pField = [
    {
      p: "Yes, I would like to add Travel Protection to my purchase for $167.65 and I confirm that I have read and agreed to the ",
      a: "Terms and Conditions",
    },
    { p: "No, I choose not to protect.", a: "Read More" },
  ];
  return (
    <div className={s._divCompDown}>
      <img src={recomendedImg} alt="recomendedImg" />

      <div className={s._recomendCheck}>
        {pField.map((textPA, index) => (
          <ElementRadioRecomendedTravel textP={textPA.p} textA={textPA.a} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTravel;
