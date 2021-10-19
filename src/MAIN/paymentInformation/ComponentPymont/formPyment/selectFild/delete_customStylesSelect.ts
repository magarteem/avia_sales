export const customStyles2 = {
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
