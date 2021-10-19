import s from "./headerMettYou.module.css";
import photo from "../../../HEADER/h_UpMainDown/imgHead/photo.jpg";

export const HeaderMettYou = () => {
  return (
    <div className={s.headerMettYou}>
      <div className={s.MettYouImg}>
        <img src={photo} alt="photo" />
      </div>
      <h1>Did I mett Your expectations?</h1>
      <span>
        If You feel that the service provided was exceptional, You can express
        your gratuide (optional)
      </span>
    </div>
  );
};
