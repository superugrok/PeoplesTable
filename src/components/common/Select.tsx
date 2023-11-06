import { ISelectProps } from "@Types/common";
import React from "react";
import "@Assets/css/select.css";

export const Select = ({ onChange, options, type, value }: ISelectProps) => {
  const opts = options.map((el) => (
    <option value={el} key={el}>
      {el}
    </option>
  ));

  return (
    <select
      className="selector"
      value={value}
      onChange={(event) => onChange(event, type)}
    >
      {opts}
    </select>
  );
};
