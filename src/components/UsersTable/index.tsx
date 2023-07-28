"use client";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ProfilePicture } from "../ProfilePicture";
import { User, UserStatus } from "@/interfaces/users";
import "@/styles/components/_users_table.scss";

const columns: ColumnsType<User> = [
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
    render: (status) => <p>{UserStatus[status]}</p>,
  },
];

const dummyData: User[] = [
  {
    id: "1",
    name: "Ronaldo Abreu",
    email: "ronaldo.abreu@meusite.com.br",
    phone: "(14) 99745-1234",
    amount: "251.59",
    photo_url: "https://desafio.eadplataforma.com/front/assets/ronaldo.jpg",
    status: 1,
  },

  {
    id: "2",
    name: "Geovane Felix",
    email: "geovane.felix@meusite.com.br",
    phone: "(14) 99745-5678",
    amount: "265.59",
    photo_url: "https://desafio.eadplataforma.com/front/assets/geovane.jpg",
    status: 0,
  },
];

export const UsersTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={dummyData}
      rowKey={(item) => item.id}
      showHeader={false}
    />
  );
};
