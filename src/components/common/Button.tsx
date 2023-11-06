import { IButtonProps } from "@Types/common";
import React from "react";
import "@Assets/css/button.css";

export const Button = ({
  className,
  disabled,
  onClick,
  children,
  style,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={className || "btn"}
      style={style}
    >
      {children}
    </button>
  );
};
