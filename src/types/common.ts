import { CSSProperties } from "react";

export interface IButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
}

export interface ISelectProps {
  onChange: (event: React.SyntheticEvent, type: string) => void;
  options: string[];
  type: string;
  value: string;
}

export interface IModalProps {
  setVisible: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      modalContnet: JSX.Element;
    }>
  >;
  visible: boolean;
  content: JSX.Element;
}
