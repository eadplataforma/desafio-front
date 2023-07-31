import { IconType } from "react-icons";
import { BsGridFill, BsFillGearFill } from "react-icons/bs";

interface NavbarItem {
  title: string;
  path: string;
  icon: IconType;
}

export const navbarItems: NavbarItem[] = [
  {
    title: "Painel",
    path: "/",
    icon: BsGridFill,
  },
  {
    title: "Configurações",
    path: "/configuracoes",
    icon: BsFillGearFill,
  },
];
