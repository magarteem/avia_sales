import React from "react";
import {
  ElementCompGray,
  Element_TitleComp,
} from "../ElementsMainBlock/ElementsMainBlock";
import s from "./travelProtection.module.css";
import travel from "../imgMain/travelProtection.png";
import airHelp from "../imgMain/AirHelp.png";
import ElementTravel from "./elementTravel/ElementTravel";

const CompGrayTravel = () => {
  return (
    <div className={s._grayBlick}>
      <div>
        <h1>Why to protect?</h1>
        <h1>We’ll process your changes for free!</h1>
      </div>
      <img className={s._travelImgHide991px} src={travel} alt="travel" />
    </div>
  );
};
const CompGrayAirHelp = () => {
  return (
    <div className={s._grayBlick + " " + s.GrayBlickMR}>
      <img src={airHelp} alt="airHelp" />
      <p className={s._grayBlickAirHelp}>
        Get up to $700 per passenger for delayed or canceled flights, no matter
        the ticket price.
      </p>
    </div>
  );
};

const TravelProtection = () => {
  const elemTravel = [
    {
      span: "Missed your connections due to inclement weather?",
      p: "We’ll rebook you for FREE!",
    },
    {
      span: "Last minute plan changes?",
      p: "We’ll process your changes for FREE!",
    },
    {
      span: "Got sick and can’t travel?",
      p: "Get 100% refund",
    },
    {
      span: "Flights got canceled or delayed?",
      p: "We’ll rebook you for FREE!",
    },
    {
      span: "Never used your Travel Care Service?",
      p: "No worries! Claim Your Voucher for next purchase with Priority Flyers",
    },
    {
      span: "Airline mishandlied your baggage?",
      p: "We’ll get them back",
    },
  ];

  return (
    <section className={s.divLeftComp}>
      <Element_TitleComp title="Travel Protection" />

      <div className={s._divCompDown}>
        <ElementCompGray textGray={<CompGrayTravel />} />

        <div className={s.blockCheckItem}>
          {elemTravel.map((text, index) => (
            <ElementTravel textSpan={text.span} textP={text.p} />
          ))}
        </div>

        <ElementCompGray textGray={<CompGrayAirHelp />} />
      </div>
    </section>
  );
};

export default TravelProtection;
