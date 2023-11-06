import React from "react";
import { IUsersObject } from "@Types/states";

type TSetModal = (
  value: React.SetStateAction<{
    visible: boolean;
    modalContnet: JSX.Element;
  }>
) => void;

export const buildModalContent = (
  user: IUsersObject,
  fullName: string,
  setModal: TSetModal
) => {
  return (
    <div>
      <button
        className="modal__btn"
        onClick={() => setModal({ visible: false, modalContnet: <div></div> })}
      ></button>
      <img src={user.picture.large} alt={fullName} className="modal__image" />
      <p className="modal__fullname">{fullName}</p>
      <div className="modal__wrapper">
        <div className="modal__content">
          <div className="modal__info">
            <span className="modal__label">ID:</span>
            <span className="modal__text">{`${user.id.name} ${user.id.value}`}</span>
          </div>
          <div className="modal__info">
            <span className="modal__label">Email:</span>
            <a href={`mailto:${user.email}`} className="modal__text">
              {user.email}
            </a>
          </div>
          <div className="modal__info">
            <span className="modal__label">Phone:</span>
            <a href={`tel:${user.phone}`} className="modal__text">
              {user.phone}
            </a>
          </div>
        </div>
        <div className="modal__content">
          <div className="modal__info">
            <span className="modal__label">Country:</span>
            <span className="modal__text">{user.location.country}</span>
          </div>
          <div className="modal__info">
            <span className="modal__label">City:</span>
            <span className="modal__text">{user.location.city}</span>
          </div>
          <div className="modal__info">
            <span className="modal__label">Postcode:</span>
            <span className="modal__text">{user.location.postcode}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
