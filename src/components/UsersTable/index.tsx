"use client";
import "@/styles/components/_users_table.scss";

import { Checkbox, Table } from "antd";
import { FiTrash } from "react-icons/fi";
import { ColumnsType } from "antd/es/table";
import { useContext, useState } from "react";
import { Key } from "antd/es/table/interface";
import { DataContext } from "@/context/UsersContext";
import { User, UserStatus } from "@/interfaces/users";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import {
  DeleteModal,
  EditModal,
  Pagination,
  ProfilePicture,
} from "@/components";

export const UsersTable = () => {
  const { paginatedUsers } = useContext(DataContext);
  const [usersToDelete, setUsersToDelete] = useState<User[]>([]);
  const [updateModalState, setUpdateModalState] = useState(false);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys: React.Key[], selectedRows: User[]) => {
      setSelectedRowKeys(selectedKeys);
      setUsersToDelete(selectedRows);
    },
  };

  const onSelectAll = (e: CheckboxChangeEvent) => {
    if (e.target.checked) {
      setSelectedRowKeys(paginatedUsers.map((item) => item.id));
      setUsersToDelete(paginatedUsers);
    } else {
      setUsersToDelete([]);
      setSelectedRowKeys([]);
    }
  };

  const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setDeleteModalState(true);
  };

  const userTableColumns: ColumnsType<User> = [
    {
      title: "Foto de Perfil",
      dataIndex: "photo_url",
      key: "photo_url",
      render: (link) => <ProfilePicture size="sm" url={link} />,
      className: "table-perfil-picture-wrapper",
    },
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Montante",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <p
          className={`${
            status == UserStatus.Inadimplente ? "danger" : "normal"
          }`}
        >
          {status === UserStatus.Adimplente ? "Adimplente" : "Inadimplente"}
        </p>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) =>
        usersToDelete.some((userToDelete) => userToDelete.id === record.id) && (
          <button
            type="button"
            className="delete-button"
            onClick={(e) => onDelete(e)}
          >
            <FiTrash className="delete-icon" />
          </button>
        ),
    },
  ];

  return (
    <div>
      <div className="table-header-wrapper">
        <Checkbox onChange={(e) => onSelectAll(e)}>Selecionar Todos</Checkbox>
        {usersToDelete.length > 0 && (
          <button
            className="delete-selcted-button"
            onClick={() => setDeleteModalState(true)}
          >
            Excluir selecionados
          </button>
        )}
      </div>
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
                setUpdateModalState(true);
              },
            };
          }}
        />
        <Pagination />
        <EditModal
          open={updateModalState}
          setOpen={setUpdateModalState}
          user={userToEdit}
        />
        <DeleteModal
          open={deleteModalState}
          setOpen={setDeleteModalState}
          data={usersToDelete}
        />
      </div>
    </div>
  );
};
