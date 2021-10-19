import {
  ElementAdd,
  ElementButton,
  ElementChecbox,
  ElementInput,
} from "./ElementFormRightMain";
import s from "./formRightMain.module.css";
import info from "../../imgMain/info.png";
import { DatePickerRightMain } from "./DatePickerRightMain";

const FormRightMain = () => {
  const formFild = [
    { title: "First name *", placeholder: "First name *" },
    { title: "Last name *", placeholder: "To where?" },
    { title: "Middle name", placeholder: "Middle name *" },
  ];

  return (
    <form className={s.form}>
      <h1 className={s.formTitle}>Gender *</h1>

      <div className={s.FormCheckbox}>
        <ElementChecbox mafemale="Male" />
        <ElementChecbox mafemale="Female" />
      </div>

      <p className={s.form_P}>
        The passenger names must match the travel documents. Name changes are
        not allowed.
      </p>

      <div className={s.formInput}>
        {formFild.map((item) => (
          <ElementInput title={item.title} placeholder={item.placeholder} />
        ))}

        <DatePickerRightMain />
      </div>

      <div className={s.formButton}>
        <ElementButton classes="buttonCansel" buttonText="Cansel" />
        <ElementButton classes="buttonRed" buttonText="Confirm changes" />
      </div>

      <div className={s.formAddDiv}>
        <ElementAdd textAdd="Add passenger (max 9)" />
      </div>

      <div className={s.formInfo}>
        <img src={info} alt="info" />
        <span>
          The quoted prices are not guaranteed until the tickets are issued.
        </span>
      </div>
    </form>
  );
};

export default FormRightMain;
