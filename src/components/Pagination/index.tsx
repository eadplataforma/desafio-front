import { PaginationProps, Pagination as AntPagination } from "antd";
import { PaginationButton } from "../PaginationButton";
import { useContext, useState } from "react";
import { DataContext } from "@/context/UsersContext";

export const Pagination = () => {
  const { changePage, pagination } = useContext(DataContext);

  const handlePagination = (page: number, pageSize: number) => {
    changePage(page);
  };
  return (
    <AntPagination
      itemRender={itemRender}
      className="pagination"
      total={pagination.offset + pagination.rows}
      pageSize={pagination.limit}
      onChange={(page, pageSize) => handlePagination(page, pageSize)}
      defaultCurrent={1}
      showSizeChanger={false}
    />
  );
};

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return <PaginationButton title="Anterior" onClick={() => {}} />;
  }
  if (type === "next") {
    return <PaginationButton title="Próximo" onClick={() => {}} />;
  }
  return <p className="pagination-text">{originalElement}</p>;
};
