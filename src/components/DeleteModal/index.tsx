import { User } from "@/interfaces/users";
import "@/styles/components/_delete_modal.scss";

import { Divider, Modal } from "antd";
import { useContext, useState } from "react";
import userService from "@/services/userService";
import { DataContext } from "@/context/UsersContext";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  data: User[];
}

export const DeleteModal = ({ open, setOpen, data }: Props) => {
  const [loading, setLoading] = useState(false);
  const { setUsers, users, paginatedUsers, setPaginatedUsers } =
    useContext(DataContext);

  const handleCancel = () => {
    setOpen(false);
  };

  //0 - 1 // 10 - 2 // 20 - 3

  const handleDelete = async () => {
    setLoading(true);

    try {
      if (data.length === 1) {
        await userService.deleteUser(data[0].id);
      } else {
        const numericIds = data.map((user) => parseInt(user.id));
        await userService.deleteUsers(numericIds);
      }

      const deletedIds = data.map((user) => user.id);
      const filteredUsers = users.filter(
        (user) => !deletedIds.includes(user.id)
      );

      const filteredPaginatedUsers = paginatedUsers.filter(
        (user) => !deletedIds.includes(user.id)
      );

      setUsers(filteredUsers);
      setPaginatedUsers(filteredPaginatedUsers);
    } catch (error) {
      console.error(error);
    }

    setOpen(false);
    setLoading(false);
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleDelete}
      title={`${data.length > 1 ? "Excluir Usuários" : "Excluir Usuário"}`}
      confirmLoading={loading}
      cancelText="Cancelar"
      okText="Sim"
      okButtonProps={{
        shape: "round",
        size: "large",
        style: { marginRight: "1rem" },
      }}
      cancelButtonProps={{ shape: "round", size: "large" }}
    >
      {data.length > 1 && (
        <p className="delete-modal-text">
          Tem certeza que deseja remover esses usuários?
        </p>
      )}
      {!(data.length > 1) && (
        <p className="delete-modal-text">
          Tem certeza que deseja remover esse usuário?
        </p>
      )}
      <Divider />
    </Modal>
  );
};
