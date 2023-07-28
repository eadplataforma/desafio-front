import { ProfilePicture } from "../ProfilePicture";
import { PiCaretDownBold } from "react-icons/pi";
import "@/styles/components/_header_profile_button.scss";

export const HeaderProfileButton = () => {
  return (
    <div className="profile-picture-container">
      <ProfilePicture url="https://desafio.eadplataforma.com/front/assets/ronaldo.jpg" />
      <PiCaretDownBold className="profile-arrow-icon" />
    </div>
  );
};
