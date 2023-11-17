import React from "react";

type TValue =
  | null
  | string
  | number
  | {
      [key: string]: any;
    }
  | any[];

export const usePrev = (value: TValue, prevAsCurAtFirst?: boolean) => {
  // We are using refs instead of regular variables because when rerender happens, vars defined in body of the component is redefines them initial values.
  // prevAsCurAtFirst is a not required arguement, that defines if we want to see null as prevProps at first usage, or see equal values.
  // ifValuesIsNotEqual function makes available to use usePrev with any data types, like string, number, objects or arrays.

  const actRef = React.useRef<TValue>(value);
  const prevRef = React.useRef<TValue>(prevAsCurAtFirst ? value : null);

  const ifValuesIsNotEqual = (
    newVal: TValue,
    curValRef: React.MutableRefObject<TValue>
  ) => {
    switch (typeof newVal) {
      case "number":
      case "string": {
        return newVal != curValRef.current;
      }
      default:
        return JSON.stringify(newVal) != JSON.stringify(curValRef.current);
    }
  };

  if (ifValuesIsNotEqual(value, actRef)) {
    prevRef.current = actRef.current;
    actRef.current = value;
  }
  return prevRef.current;
};
