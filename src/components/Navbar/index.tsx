import Link from "next/link";
import { BsGridFill, BsFillGearFill, BsFillChatFill } from "react-icons/bs";
import "@/styles/components/_navbar.scss";
import "@/styles/components/_icons.scss";
import Logo from "../Logo";

export const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="item-wrapper">
        <Link href={"/dashboard"} className="item active">
          <BsGridFill className="navbar-icon" />
          <span className="item-text">Painel</span>
        </Link>
        <Link href={"/configuracoes"} className="item">
          <BsFillGearFill className="navbar-icon" />
          <span className="item-text">Configurações</span>
        </Link>
      </div>
      <Link href="/" className="footer">
        <BsFillChatFill className="support-icon" />
        <span className="support-text">Suporte</span>
      </Link>
    </nav>
  );
};
