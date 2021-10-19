import { ElementCompGray } from "../../ElementsMainBlock/ElementsMainBlock";
import info from "../../imgMain/info.png";
import pansil from "../../imgMain/pansil.png";
import s from "./data.module.css";

const CompGrayPassenger = () => {
  return (
    <div className={s._grayBlick}>
      <img src={info} alt="info" />
      <span>
        Traveler names must match the government-issued identification document
        intended to use during travel.
      </span>
    </div>
  );
};

const Data = () => {
  const PassName = () => {
    return (
      <>
        <div className={s._DownNameItems + " " + s.__ItemsMr}>
          <div>
            <span>Last name</span>
            <h1>Biasiolo1</h1>
          </div>
          <div>
            <span>Middle name</span>
            <h1>Biasiolo2</h1>
          </div>
        </div>
        <div className={s._DownNameItems}>
          <div>
            <span>Last name</span>
            <h1>Fabrizio</h1>
          </div>
          <div>
            <span>Middle name</span>
            <h1>
              Sep 7, 1977<span> (Adult)</span>
            </h1>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <ElementCompGray textGray={<CompGrayPassenger />} />
      <div className={s._DownName}>
        <div>
          <h1>Passenger</h1>
          <span>Gender (Male)</span>
        </div>

        <PassName />

        <div className={s._DownNameEdit}>
          <span>Edit</span>
          <img src={pansil} alt="pansil" />
        </div>
      </div>
    </>
  );
};

export default Data;
