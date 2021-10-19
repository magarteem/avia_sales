import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";
import { useState } from "react";
import s from "./datePickerRightMain.module.css";

export const DatePickerRightMain = () => {
  const [startDate1, setStartDate1] = useState(false);
  const ExampleCustomInput = forwardRef(
    (
      //@ts-ignore
      { value, onClick },
      ref
    ) => (
      <div className={s.elementInput}>
        <h2 className={s.formInpTitle}>Date of Birht *</h2>
        <input onClick={onClick} value={value} placeholder="To where?" />
      </div>
    )
  );

  return (
    <div className={s.containerDatepicker}>
      <ReactDatePicker
        //@ts-ignore
        selected={startDate1}
        //@ts-ignore
        onChange={(date) => setStartDate1(date)}
        customInput={
          //@ts-ignore
          <ExampleCustomInput />
        }
      />
    </div>
  );
};
