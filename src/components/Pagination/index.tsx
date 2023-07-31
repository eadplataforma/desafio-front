import { useContext } from "react";
import { DataContext } from "@/context/UsersContext";
import { PaginationButton } from "../PaginationButton";
import { PaginationProps, Pagination as AntPagination } from "antd";

export const Pagination = () => {
  const { fetchPage, pagination } = useContext(DataContext);

  const handlePagination = (page: number, pageSize: number) => {
    fetchPage(page);
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
      showLessItems={true}
      size="small"
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
  return <span className="pagination-text">{originalElement}</span>;
};
