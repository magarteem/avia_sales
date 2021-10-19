import {
  CompGrayConfirm,
  ElementCompGray,
} from "../ElementsMainBlock/ElementsMainBlock";
import { FooterMettYou } from "./MettYouBlocks/FooterMettYou";
import { HeaderMettYou } from "./MettYouBlocks/HeaderMettYou";
import { MainMettYou } from "./MettYouBlocks/MainMettYou";
import s from "./mettYouRexpectations.module.css";

export const MettYouRexpectations = () => {
  return (
    <section className={s.divLeftComp}>
      <div className={s._divCompDown}>
        <HeaderMettYou />
        <MainMettYou />
        <FooterMettYou />
        <ElementCompGray textGray={<CompGrayConfirm />} />
      </div>
    </section>
  );
};
