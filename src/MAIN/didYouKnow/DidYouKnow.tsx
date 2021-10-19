import {
  CompGrayConfirm,
  ElementCompGray,
  Element_TitleComp,
} from "../ElementsMainBlock/ElementsMainBlock";
import { DidYouTree } from "./componentDidYouKnow/CompDidYouText";
import s from "./didYouKnow.module.css";
import treeIcon from "../imgMain/tree61x70.png";
import { DidYouPlantMoreInput } from "./componentDidYouKnow/DidYouPlantMoreInput";

type TPropsDidYouTextRed = { textH1: string; textP: string };
export const DidYouTextRed: React.FC<TPropsDidYouTextRed> = ({
  textH1,
  textP,
}) => {
  return (
    <div>
      <h1>{textH1}</h1>
      <p>{textP}</p>
    </div>
  );
};

const DidYouKnow = () => {
  const textRedLefRigh = [
    { h1: `1,117,899`, p: `That’s how many trees we’ve planted to date` },
    { h1: `108,899`, p: `With over 100,000 taking root this year` },
  ];
  const tree = [
    { heightWidth: "24px", number: ``, img: treeIcon, price: "$5" },
    { heightWidth: "29px", number: `4x`, img: treeIcon, price: "$20" },
    { heightWidth: "34px", number: `8x`, img: treeIcon, price: "$40" },
    { heightWidth: "38px", number: `16x`, img: treeIcon, price: "$80" },
    { heightWidth: "43px", number: `20x`, img: treeIcon, price: "$100" },
  ];

  return (
    <section className={s.divLeftComp}>
      <Element_TitleComp title="Did You Know?" />

      <div className={s._divCompDown}>
        <div className={s.didYouPaddind}>
          <div className={s.didYouTitle}>
            <h1>Priority Flyers will plant a tree for every ticket sold.</h1>
            <h1>Join us in this effort!</h1>
          </div>

          <div className={s.didYouTextRed}>
            <DidYouTextRed
              textH1={textRedLefRigh[0].h1}
              textP={textRedLefRigh[0].p}
            />
            <span></span>

            <DidYouTextRed
              textH1={textRedLefRigh[1].h1}
              textP={textRedLefRigh[1].p}
            />
          </div>

          <div className={s.didYouTree}>
            <div className={s.dodth}>
              <span className={s.didYouTreeLine575}></span>
            </div>

            {tree.map((tree, index) => (
              <DidYouTree
                number={tree.number}
                img={tree.img}
                price={tree.price}
                heightWidth={tree.heightWidth}
              />
            ))}
            <span className={s.didYouTreeLine}></span>
          </div>

          <div className={s.didYouPlantMore}>
            <h1>Do you want to plant more?</h1>
            <DidYouPlantMoreInput />
          </div>
        </div>

        <ElementCompGray textGray={<CompGrayConfirm />} />
      </div>
    </section>
  );
};

export default DidYouKnow;
