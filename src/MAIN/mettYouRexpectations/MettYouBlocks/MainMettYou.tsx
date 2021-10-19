import s from "./mainMettYou.module.css";

export const MainMettYou = () => {
  const itemMeetYou = [
    { price: "25.00", selectPrise: false },
    { price: "35.00", selectPrise: false },
    { price: "50.00", selectPrise: true },
    { price: "75.00", selectPrise: false },
    { price: "100.00", selectPrise: false },
  ];
  return (
    <div className={s.mainMettYou}>
      {itemMeetYou.map((e) => (
        <div className={s.mainMettYou_Items}>
          <div className={s.mainMettYou_Dodj}>
            {e.selectPrise ? (
              <span className={s._ItemsCircleRED}>$</span>
            ) : (
              <span className={s._ItemsCircle}></span>
            )}
          </div>
          <span className={s._ItemsPrice}>${e.price}</span>
        </div>
      ))}
      <progress className={s.progress} value="25" max="100"></progress>
    </div>
  );
};
