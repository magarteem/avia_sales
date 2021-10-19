import Select from "react-select";
import cy from "../../imgMain/cy.svg";
import cz from "../../imgMain/cz.svg";
import at from "../../imgMain/at.svg";

const customStyles = {
  control: (provided: any) => {
    return {
      ...provided,
      height: "60px",
      flex: "0 1 380px",
      cursor: "pointer",
      border: "solid 1px #d3dce5",
    };
  },
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: "red",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none",
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "PTRootUIWebMedium",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1.5,
    color: "#9ba3be",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    marginTop: "1px",
  }),
};

//! SelectCountry
export const SelectCountry = () => {
  const optionCoyntry = [
    {
      value: `Moscow`,
      label: "Moscow",
    },
    {
      value: `Chish`,
      label: "Chish",
    },
  ];

  return (
    <Select
      styles={{
        ...customStyles,
        container: (provided: any) => {
          return {
            ...provided,
            flex: window.innerWidth > 575 ? "1 1 49%" : "1 0 100%",
            //flex: "1 1 49%",
            height: "60px",
            cursor: "pointer",
          };
        },
      }}
      options={optionCoyntry}
      placeholder="Enter/Select Country"
      isSearchable
    />
  );
};

//! SelectState
export const SelectState = () => {
  const optionState = [
    {
      value: `Moscow`,
      label: "Moscow",
    },
    {
      value: `Chish`,
      label: "Chish",
    },
  ];

  return (
    <Select
      styles={{
        ...customStyles,
        container: (provided: any) => {
          return {
            ...provided,
            flex: window.innerWidth > 575 ? "1 1 49%" : "1 0 100%",
            //flex: "1 1 49%",
            height: "60px",
            cursor: "pointer",
          };
        },
      }}
      options={optionState}
      placeholder="Enter/Select State"
      isSearchable
    />
  );
};
//! SelectBillingPhone
export const SelectBillingPhone = () => {
  const optionValue = [
    {
      value: `+373 `,
      label: <img src={at} alt="at" height="22" />,
    },
    {
      value: `+840 `,
      label: <img src={cz} alt="cz" height="22" />,
    },
    {
      value: `+416`,
      label: <img src={cy} alt="cy" height="22" />,
    },
  ];

  return (
    <Select
      styles={{
        ...customStyles,
        container: (provided: any) => {
          return {
            ...provided,
            flex: window.innerWidth > 1200 ? "0 1 40%" : "0 0 73px",
            height: "60px",
            cursor: "pointer",
          };
        },
        control: (provided: any) => {
          return {
            ...provided,
            height: "60px",
            cursor: "pointer",
            border: "none",
          };
        },
        valueContainer: (provided: any) => ({
          ...provided,
          margin: 0,
          padding: "0 0 0 5px",
          height: "60px",
        }),
        indicatorsContainer: (provided: any) => ({
          ...provided,
          padding: 0,
        }),
        input: (provided: any, state: any) => ({
          ...provided,
          margin: 0,
          padding: 0,
          width: "100%",
        }),
      }}
      options={optionValue}
      defaultValue={optionValue[1]}
    />
  );
};
