"use client";
import Logo from "../Logo";
import Link from "next/link";
import "@/styles/components/_icons.scss";
import "@/styles/components/_navbar.scss";
import { navbarItems } from "./navbarItems";
import { usePathname } from "next/navigation";
import { BsFillChatFill } from "react-icons/bs";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar-container">
      <div className="logo-wrapper">
        <Logo width={108.35} />
      </div>
      <div className="items-wrapper">
        {navbarItems.map(({ title, path, icon }) => (
          <Link
            href={path}
            className={`item ${pathname === path ? "active" : ""}`}
            key={path}
          >
            <span>{icon({ className: "navbar-icon" })}</span>
            <span className="item-text">{title}</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="footer">
        <BsFillChatFill className="support-icon" />
        <span className="support-text">Suporte</span>
      </Link>
    </nav>
  );
};
