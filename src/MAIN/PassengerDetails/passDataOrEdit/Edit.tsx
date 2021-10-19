import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { forwardRef } from "react";

import { useState } from "react";
import { ElemChecboxPass } from "../FormPasenger/ElementFormPas";
import s from "./edit.module.css";

type TPropsElementInput = { placeholder: string };
const Input: React.FC<TPropsElementInput> = ({ placeholder }) => {
  const [impEditState, setImpEditState] = useState("");
  return (
    <div className={s.editInp}>
      <input
        type="text"
        placeholder={placeholder}
        value={impEditState}
        onChange={(event) => setImpEditState(event.target.value)}
      />
    </div>
  );
};

const Edit = () => {
  const classAdd = {
    classP: {
      fontFamily: "PTRootUIWebRegular",
      fontSize: "14px",
      paddingLeft: "6px",
    },
    classSpan: {
      alignItems: "center",
      marginRight: "40px",
      paddingRight: 0,
    },
    classSpanChecked: {
      width: "35px",
      height: "35px",
    },
  };

  //! ReactDatePicker
  const [startDate, setStartDate] = useState(false);
  const ExampleCustomInput = forwardRef(
    (
      //@ts-ignore
      { value, onClick },
      ref
    ) => (
      //@ts-ignore
      <input
        onClick={onClick}
        value={value}
        placeholder="Select Date of Birth"
      />
    )
  );

  return (
    <div className={s._DownNameEdit}>
      <div className={s._EditUP}>
        <h1>Edit Passenger</h1>
        <div></div>
      </div>

      <form className={s._EditMain}>
        <div className={s._EditMainUP}>
          <div className={s._EditMainCheckBox}>
            <h1>Passenger</h1>
            <span className={s.gender}>Gender</span>
            <div className={s._checkBoxItems}>
              <ElemChecboxPass classAdd={classAdd} place="Male" />
              <ElemChecboxPass classAdd={classAdd} place="Female" />
            </div>
          </div>

          <div className={s._EditMainInput}>
            <div className={s._InputBlock}>
              <Input placeholder="Enter First Name" />
              <Input placeholder="Enter Last Name" />
            </div>
            <div className={s._InputBlock}>
              <Input placeholder="Enter Middle Name" />

              <div className={s.editInp}>
                <ReactDatePicker
                  //@ts-ignore
                  selected={startDate}
                  //@ts-ignore
                  onChange={(date) => setStartDate(date)}
                  customInput={
                    //@ts-ignore
                    <ExampleCustomInput />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className={s._editDown}>
          <div className={s._editDownInner}>
            <button className={s._cansel + " " + s._conf_cansel}>Cancel</button>
            <button className={s._confurm + " " + s._conf_cansel}>
              Confirm changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
