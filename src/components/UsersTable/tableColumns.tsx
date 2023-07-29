import { User, UserStatus } from "@/interfaces/users";
import { ColumnsType } from "antd/es/table";
import { ProfilePicture } from "../ProfilePicture";

export const userTableColumns: ColumnsType<User> = [
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
        className={`${status == UserStatus.Inadimplente ? "danger" : "normal"}`}
      >
        {status === UserStatus.Adimplente ? "Adimplente" : "Inadimplente"}
      </p>
    ),
  },
];
