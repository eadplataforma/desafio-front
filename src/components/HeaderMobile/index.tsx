import "@/styles/components/_header_mobile.scss";
import Logo from "../Logo";
import { navbarItems } from "../Navbar/navbarItems";
import Link from "next/link";
import { Searchbar } from "../Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HeaderProfileButton } from "../HeaderProfileButton";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown, MenuProps } from "antd";
import { BsFillChatFill } from "react-icons/bs";

export const HeaderMobile = () => {
  return (
    <nav className="mobile-header">
      <div className="mobile-logo-wrapper">
        <Logo width={70} />
      </div>
      <div className="profile-items-mobile">
        <div className="notification-icon-wrapper active">
          <IoMdNotificationsOutline className="notification-icon" />
        </div>
        <HeaderProfileButton size="md" />
        <Dropdown
          placement="bottomLeft"
          menu={{ items }}
          arrow
          trigger={["click"]}
        >
          <button type="button" className="mobile-menu-button">
            <AiOutlineMenu className="mobile-menu-icon" />
          </button>
        </Dropdown>
      </div>
    </nav>
  );
};

const items: MenuProps["items"] = [
  ...navbarItems.map((item) => ({
    key: item.path,
    label: (
      <Link href={item.path} className={`item`} key={item.path}>
        <span>{item.icon({ className: "navbar-icon" })}</span>
        <span className="item-text">{item.title}</span>
      </Link>
    ),
  })),
  {
    key: "search",
    label: <Searchbar className="searchbar-mobile" size="middle" />,
  },
  {
    key: "support",
    label: (
      <Link href="/" className="mobile-support-link">
        <BsFillChatFill className="mobile-support-icon" />
        <span className="support-text">Suporte</span>
      </Link>
    ),
  },
];
