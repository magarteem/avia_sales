import { useEffect, useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./react-credit-cards.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./formPyment.module.css";
import at from "../../../imgMain/at.svg";
import cy from "../../../imgMain/cy.svg";
import cz from "../../../imgMain/cz.svg";
import { TitlePaymontFlags } from "../CompTitlePaymontInf";
import { SelectPyment } from "./selectFild/SelectFild";
import { PhoneFildCards } from "./phoneFialdCards/PhoneFildCards";

export const FormPyment = () => {
  // ! yup     =============================
  const schema = yup.object().shape({
    number: yup
      .number()
      .typeError("Это не число")
      .positive("positive")
      .integer("integer")
      .required("required"),
    //expiry: yup.number().required("No valid expiryMM1"),
    expiryMM: yup.number().required(),
    expiryYY: yup.number().required("No valid expiryMM2"),
    cvc: yup.number().required("No valid cvc"),
    name: yup.string().required("No valid Name"),
  });

  const style = {
    valid: {
      backgroundColor: "#FFE8E8",
      border: "2px solid #DF1F3D",
    },
    opacity: {
      opacity: 1,
    },
  };

  // ! react-hook-form     =============================
  const [number, setNumber] = useState("");
  const [expiryMM, setExpiryMM] = useState("");
  const [expiryYY, setExpiryYY] = useState("");
  useEffect(() => {
    setExpiry(`${expiryMM}${expiryYY}`);
  }, [expiryMM, expiryYY]);
  const [expiry, setExpiry] = useState("546");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("");
  const [telCode, setTelCode] = useState("");

  // ?TC
  type FormValues = {
    number: number;
    expiryMM: number;
    expiryYY: number;
    cvc: number;
    name: string;
    selectPhone: number;
    telCode: number;
    disabled: any;
  };
  //?register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  //?onSubmit
  const onSubmit = (data: any) => {
    console.log("Отправлено: ", data);
  };

  //!     select
  const [selectData, setSelectData] = useState("");
  useEffect(() => {
    setTelCode(selectData);
  }, [selectData]);

  const selectFild = [
    {
      value: `888 827 06 06`,
      label: <img src={at} alt="at" />,
    },
    {
      value: `0 69 84 84 540`,
      label: <img src={cz} alt="cz" />,
    },
    {
      value: `0 800 090 31 33`,
      label: <img src={cy} alt="cy" />,
    },
  ];
  const customStyles = {
    container: (provided: any, state: any) => ({
      ...provided,
      height: "55px",
      width: "100%",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      height: "55px",
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      width: "100%",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      height: "55px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      height: "55px",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "#df1f3d",
      transition: "all .2s ease",
      transform: state.isFocused ? "rotate(180deg)" : null,
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
    }),
  };
  //!select           //

  return (
    <div className={s.formPyment}>
      <div className={s.formPymentImg}>
        {/*// !  <Cards                ==============================================*/}
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          //@ts-ignore
          focused={focus}
        />
      </div>
      <div className={s.formPymentFlags575px}>
        <TitlePaymontFlags />
      </div>
      {/*// !  input                ==================================================*/}
      <form className={s.formPymentCards} onSubmit={handleSubmit(onSubmit)}>
        <input
          style={errors.number && style.valid}
          {...register("number")}
          className={s.PymInpNumber}
          type="tel"
          placeholder="Enter Bank Card Number"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        {/*//! MM YY*/}
        <input
          style={errors.expiryMM && style.valid}
          {...register("expiryMM")}
          className={s.PymInpExpiryMMYY}
          type="text"
          placeholder="MM"
          onChange={(e) => setExpiryMM(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          style={Object.assign(
            { opacity: "0.2" },
            errors.expiryYY && style.valid,
            expiryMM.length === 2 && style.opacity
          )}
          {...register("expiryYY")}
          className={s.PymInpExpiryMMYY}
          type="text"
          placeholder="YY"
          disabled={expiryMM ? false : true}
          onChange={(e) => setExpiryYY(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          style={errors.cvc && style.valid}
          {...register("cvc")}
          className={s.PymInpCVC}
          type="tel"
          placeholder={"CVV / CVC"}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <input
          style={errors.name && style.valid}
          {...register("name")}
          className={s.PymInpName}
          type="text"
          placeholder="Enter Card Holder’s Name"
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />

        <div className={s.telPhone}>
          <PhoneFildCards />
          {/*<SelectPyment setSelectData={setSelectData} />
          <input
            {...register("telCode")}
            className={s.PymInpTel}
            type="text"
            value={telCode}
            placeholder="Enter Phone Number"
            onChange={(e) => setTelCode(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />*/}
        </div>
        {/*<button type="submit">Click</button>*/}
      </form>
    </div>
  );
};
{
  /*<button onClick={handleSubmit(onSubmit)} type="submit">
        Tect вне формы
      </button>*/
}
