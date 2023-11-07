import { IPaginationProps } from "@Types/props";
import React from "react";
import { Button } from "./common/Button";
import "@Assets/css/pagination.css";

export const Pagination = ({
  page,
  setPage,
  users,
  pagesCount,
}: IPaginationProps) => {
  const dynamicBtns = [];
  const checkBorders = (i: number) => i > 1 && i < pagesCount;
  for (let i = page - 2; i < page + 3; i++) {
    checkBorders(i) &&
      dynamicBtns.push(
        <Button key={i} disabled={i === page} onClick={() => setPage(i)}>
          {i}
        </Button>
      );
  }
  const backDotsDisplay = page > 4 ? "inline-block" : "none";
  const forwardDotsDisplay = page < pagesCount - 3 ? "inline-block" : "none";

  return (
    users[page] && (
      <div className="pagination-container">
        <Button disabled={page === 1} onClick={() => setPage(1)}>
          1
        </Button>
        <Button style={{ display: backDotsDisplay }}>...</Button>
        {dynamicBtns}
        <Button style={{ display: forwardDotsDisplay }}>...</Button>
        <Button
          disabled={page === pagesCount}
          onClick={() => setPage(pagesCount)}
        >
          {pagesCount}
        </Button>
      </div>
    )
  );
};
