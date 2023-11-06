import React from "react";
import { Select } from "./common/Select";
import { IFiltersProps } from "@Types/props";
import "@Assets/css/select.css";

export const Filters = ({ filters, setFilters }: IFiltersProps) => {
  const filterOptions = {
    gender: ["male", "female"],
    nat: [
      "AU",
      "BR",
      "CA",
      "CH",
      "DE",
      "DK",
      "ES",
      "FI",
      "FR",
      "GB",
      "IE",
      "IN",
      "IR",
      "MX",
      "NL",
      "NO",
      "NZ",
      "RS",
      "TR",
      "UA",
      "US",
    ],
  };

  const handleChange = (changeEvent: any, type: string) =>
    setFilters({ ...filters, [type]: changeEvent.target.value });

  return (
    <div className="select">
      <Select
        options={filterOptions.gender}
        onChange={handleChange}
        type="gender"
        value={filters.gender}
      />
      <Select
        value={filters.nat}
        options={filterOptions.nat}
        onChange={handleChange}
        type="nat"
      />
    </div>
  );
};
