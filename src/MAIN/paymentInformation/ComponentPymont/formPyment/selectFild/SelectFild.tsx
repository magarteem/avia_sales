import "react-credit-cards/es/styles-compiled.css";
import Select from "react-select";
import { selectOptions } from "./selectOptions";

type TPropsSelectPyment = { setSelectData: {} };
export const SelectPyment: React.FC<TPropsSelectPyment> = ({
  setSelectData,
}) => {
  const customStylesPyment = {
    container: (provided: any, state: any) => ({
      ...provided,
      width: "80px",
      height: "55px",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      height: "55px",
      borderRight: "none",
      borderRadius: 0,
      borderBottomLeftRadius: "10px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      paddingLeft: "10px",
      margin: 0,
      height: "55px",
    }),
    indicatorSeparator: (provided: any, state: any) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      color: "red",
      padding: "0 10px",
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
      margin: 0,
    }),
    menu: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
    }),
  };

  return (
    <Select
      styles={customStylesPyment}
      defaultValue={selectOptions[1]}
      options={selectOptions}
      //@ts-ignore
      onChange={(e: any) => setSelectData(e.value)}
    />
  );
};
