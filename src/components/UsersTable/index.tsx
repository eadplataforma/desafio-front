"use client";
import { Table } from "antd";
import { useContext } from "react";
import { Pagination } from "../Pagination";
import { userTableColumns } from "./tableColumns";
import { DataContext } from "@/context/UsersContext";
import "@/styles/components/_users_table.scss";

export const UsersTable = () => {
  const { paginatedUsers } = useContext(DataContext);
  console.log(paginatedUsers);
  return (
    <div className="table-content">
      <Table
        columns={userTableColumns}
        dataSource={paginatedUsers}
        rowKey={(item) => item.id}
        showHeader={false}
        pagination={false}
        scroll={{ x: "100%" }}
      />
      <Pagination />
    </div>
  );
};
