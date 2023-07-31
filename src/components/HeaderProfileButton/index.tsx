import "@/styles/components/_header_profile_button.scss";

import { ProfilePicture } from "@/components";
import { PiCaretDownBold } from "react-icons/pi";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "@/context/UsersContext";

interface Props {
  size?: "md" | "sm" | "lg";
}

export const HeaderProfileButton = ({ size = "lg" }: Props) => {
  const { currentUser } = useContext(DataContext);
  return (
    <Link href={"/perfil"}>
      <div className="profile-picture-container">
        <ProfilePicture size={size} url={currentUser?.photo_url || ""} />
        <PiCaretDownBold className="profile-arrow-icon" />
      </div>
    </Link>
  );
};
