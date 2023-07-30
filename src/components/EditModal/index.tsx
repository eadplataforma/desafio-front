import { UpdateUser, User } from "@/interfaces/users";
import { Divider, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import "@/styles/components/_edit_modal.scss";
import { phoneFormat } from "@/utils/phoneFormat";
import { emailValidator } from "@/utils/emailValidator";
import { phoneValidator } from "@/utils/phoneValidator";
import userService from "@/services/userService";

interface Props {
  open: boolean;
  user: User | null;
  setOpen: (value: boolean) => void;
}

export const EditModal = ({ open, setOpen, user }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(true);

  useEffect(() => {
    if (open && !user) setOpen(false);
    else {
      setName(user?.name || "");
      setEmail(user?.email || "");
      setPhone(user?.phone || "");
    }
  }, [open]);

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    if (user) {
      setLoading(true);
      const newUser: UpdateUser = {
        name,
        email,
        phone,
        id: user.id,
      };
      await userService.updateUser(user.id, newUser);
      setLoading(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    if (name.trim().length === 0) {
      setValidated(false);
    } else if (!emailValidator(email)) {
      setValidated(false);
    } else if (!phoneValidator(phone)) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  }, [name, email, phone]);

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      onOk={handleSave}
      title="Editar Informações"
      confirmLoading={loading}
      cancelText="Cancelar"
      okText="Salvar"
      okButtonProps={{
        shape: "round",
        size: "large",
        disabled: !validated,
        style: { marginRight: "1rem" },
      }}
      cancelButtonProps={{ shape: "round", size: "large" }}
    >
      <div className="edit-form-wrapper">
        <div className="edit-item-wrapper">
          <label htmlFor="edit-name">* Nome</label>
          <Input
            id="edit-name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="edit-item-wrapper">
          <label htmlFor="edit-email">* E-mail</label>
          <Input
            id="edit-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="edit-item-wrapper">
          <label htmlFor="edit-phone">* Telefone</label>
          <Input
            id="edit-phone"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(phoneFormat(e.target.value))}
          />
        </div>
      </div>
      <Divider />
    </Modal>
  );
};
