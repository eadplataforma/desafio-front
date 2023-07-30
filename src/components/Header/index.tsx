import { IoMdNotificationsOutline } from "react-icons/io";
import "@/styles/components/_header.scss";
import "@/styles/components/_icons.scss";
import { Searchbar } from "../Searchbar";
import { HeaderProfileButton } from "../HeaderProfileButton";

interface Props {
  initialSearchValue?: string;
}

export const Header = ({ initialSearchValue }: Props) => {
  return (
    <div className="header-container">
      <Searchbar
        className="searchbar-desktop"
        initialValue={initialSearchValue}
      />
      <div className="notification-icon-wrapper active">
        <IoMdNotificationsOutline className="notification-icon" />
      </div>
      <HeaderProfileButton />
    </div>
  );
};
