import { useForm } from "react-hook-form";
import s from "./formBillingDetails.module.css";
import { PhoneBillingDetails } from "./phoneBillingDetails/PhoneBillingDetails";
import {
  SelectBillingPhone,
  SelectCountry,
  SelectState,
} from "./SelctFildItems";

type FormValues = {
  country: string;
  state: string;
  city: string;
  address: string;
  email: string;
  ZIPCode: number;
};

export const FormBillingDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmitBill = (data: any) => {
    console.log("Отправлено: ", data);
  };

  return (
    <form
      className={s.formBillingDetails}
      onSubmit={handleSubmit(onSubmitBill)}
    >
      <SelectCountry />
      <SelectState />

      <input
        className={s.inpCity}
        type="text"
        placeholder="Enter City"
        {...register("city")}
      />

      <input
        className={s.inpAddress}
        type="text"
        placeholder="Enter Street Address"
        {...register("address")}
      />

      <input
        className={s.inpEmail}
        type="text"
        placeholder="Enter Card Holder’s Email"
        {...register("email")}
      />

      <input
        className={s.inpZIPCode}
        type="tel"
        placeholder="Enter ZIP/Postal Code"
        {...register("ZIPCode")}
      />

      <div className={s.BillingPhone}>
        <PhoneBillingDetails />
      </div>

      {/*<div className={s.BillingPhone}>
        <SelectBillingPhone />
        <input
          className={s.inpZIPCodeInput}
          type="text"
          placeholder="Enter Phone Number"
        />
      </div>*/}
    </form>
  );
};
