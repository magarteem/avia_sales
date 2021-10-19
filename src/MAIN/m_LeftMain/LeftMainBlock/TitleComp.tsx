import React from "react";
import s from "./titleComp.module.css";
type  TProps ={imgLink:string}
const TitleComp: React.FC<TProps> = ({ imgLink }) => {
  return (
    < >
      <div className={s._BlockUP}>
        <img src={imgLink} alt="imgRight" />
        <h1>Departure</h1>
        <img src={imgLink} alt="imgRight" />
      </div>

      <div className={s._BlockMain}>
        <h2>Lviv (LWO) - New York (JFK)</h2>
        <p>Total tavel time <span>21h:50min</span></p>
      </div>
    </>
  );
};

export default TitleComp;