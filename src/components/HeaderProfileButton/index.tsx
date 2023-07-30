import { ProfilePicture } from "../ProfilePicture";
import { PiCaretDownBold } from "react-icons/pi";
import "@/styles/components/_header_profile_button.scss";

interface Props {
  size?: "md" | "sm" | "lg";
}

export const HeaderProfileButton = ({ size = "lg" }: Props) => {
  return (
    <div className="profile-picture-container">
      <ProfilePicture
        size={size}
        url="https://desafio.eadplataforma.com/front/assets/ronaldo.jpg"
      />
      <PiCaretDownBold className="profile-arrow-icon" />
    </div>
  );
};
