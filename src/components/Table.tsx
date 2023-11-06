import { ITableProps } from "@Types/props";
import React from "react";
import { Loading } from "./Loading";
import "@Assets/css/table.css";
import { Modal } from "./common/Modal";
import "@Assets/css/modal.css";
import { Filters } from "./Filters";
import { buildModalContent } from "@Utils/buildModal";

export const Table = ({ users, page, filters, setFilters }: ITableProps) => {
  const [modal, setModal] = React.useState({
    visible: false,
    modalContnet: <div></div>,
  });

  const rows = users[page]?.map((user) => {
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    return (
      <tr
        key={user.cell}
        style={{ cursor: "pointer" }}
        onClick={() =>
          setModal({
            visible: true,
            modalContnet: buildModalContent(user, fullName, setModal),
          })
        }
      >
        <th>
          <img src={user.picture.thumbnail} alt={fullName} />
        </th>
        <th>{fullName}</th>
        <th>{user.gender}</th>
        <th>{user.nat}</th>
        <th>{user.email}</th>
        <th>{user.phone}</th>
        <th>{user.location.country}</th>
        <th>{user.location.city}</th>
      </tr>
    );
  });

  return users[page] ? (
    <div>
      <Modal
        content={modal.modalContnet}
        setVisible={setModal}
        visible={modal.visible}
      />
      <Filters filters={filters} setFilters={setFilters} />
      <table className="table">
        <thead>
          <tr>
            <th colSpan={2}>Fullname</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  ) : (
    <Loading />
  );
};
