import s from "./compDidYouText.module.css";

type TPropsDidYouTree = {
  number: string;
  img: any;
  price: string;
  heightWidth: string;
};
export const DidYouTree: React.FC<TPropsDidYouTree> = ({
  number,
  img,
  price,
  heightWidth,
}) => {
  const style = {
    width: "44px",
    height: "44px",
  };
  return (
    <div className={s.treeElement}>
      <div className={s.__elementImgSpan}>
        <span>{number}</span>
        <div className={s.imgSize}>
          <img src={img} alt="tree" />
        </div>
      </div>

      <div className={s.spanSize}>
        <span
          className={s.treeElementAround}
          style={{ height: heightWidth, width: heightWidth }}
        ></span>
      </div>
      <span>{price}</span>
    </div>
  );
};
