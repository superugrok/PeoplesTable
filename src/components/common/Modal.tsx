import React from "react";
import ReactDOM from "react-dom";
import { IModalProps } from "@Types/common";

export const Modal = ({ visible, setVisible, content }: IModalProps) => {
  window.onclick = (event: any) => {
    event.target.className == "modal" &&
      setVisible({ visible: false, modalContnet: <div></div> });
  };

  const root: any = document.getElementById("root");

  const modal = (
    <div className="modal" style={{ display: visible ? "block" : "none" }}>
      <div className="modal__overlay">{content}</div>
    </div>
  );

  return ReactDOM.createPortal(modal, root);
};
