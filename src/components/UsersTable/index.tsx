"use client";
import { Table } from "antd";
import { useContext, useState } from "react";
import { Pagination } from "../Pagination";
import { userTableColumns } from "./tableColumns";
import { DataContext } from "@/context/UsersContext";
import "@/styles/components/_users_table.scss";
import { User } from "@/interfaces/users";
import { EditModal } from "../EditModal";

export const UsersTable = () => {
  const { paginatedUsers } = useContext(DataContext);
  const [modalState, setModalState] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  console.log(paginatedUsers);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: User[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: User) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };
  return (
    <div>
      <input type="checkbox" id="select-all" />
      <label htmlFor="select-all">Selecionar Todos</label>
      <div className="table-content">
        <Table
          columns={userTableColumns}
          dataSource={paginatedUsers}
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          rowKey={(item) => item.id}
          showHeader={false}
          pagination={false}
          scroll={{ x: "100%" }}
          onRow={(record) => {
            return {
              onClick: () => {
                setUserToEdit(record);
                setModalState(true);
              },
            };
          }}
        />
        <Pagination />
        <EditModal
          open={modalState}
          setOpen={setModalState}
          user={userToEdit}
        />
      </div>
    </div>
  );
};
