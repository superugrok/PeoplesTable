import React from "react";
import { IModalProps } from "@Types/common";

export const Modal = ({ visible, setVisible, content }: IModalProps) => {
  window.onclick = (event: any) => {
    event.target.className == "modal" &&
      setVisible({ visible: false, modalContnet: <div></div> });
  };

  return (
    <div className="modal" style={{ display: visible ? "block" : "none" }}>
      <div className="modal__overlay">{content}</div>
    </div>
  );
};
