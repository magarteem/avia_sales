import s from "./footerMettYou.module.css";

export const FooterMettYou = () => {
  return (
    <div className={s.footerMettYou}>
      <div className={s.fooLeftBlock}>
        <h1>How was my service?</h1>
        <p>
          If You feel that the service provided was exceptional, You can enter
          higher amount manyally (optional)
        </p>
      </div>
      <div className={s.fooRightBlock}>
        <h2>Think I did better?</h2>
        <label>
          <span>$</span>
          <input placeholder="price" />
        </label>
      </div>
    </div>
  );
};
