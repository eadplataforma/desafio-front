import { IoMdNotificationsOutline } from "react-icons/io";
import "@/styles/components/_header.scss";
import "@/styles/components/_icons.scss";
import { ProfilePicture } from "../ProfilePicture";
import { Searchbar } from "../Searchbar";
import { HeaderProfileButton } from "../HeaderProfileButton";

export const Header = () => {
  return (
    <div className="header-container">
      <Searchbar className="searchbar" />
      <div className="notification-icon-wrapper active">
        <IoMdNotificationsOutline className="notification-icon" />
      </div>
      <HeaderProfileButton />
    </div>
  );
};
