import Image from "next/image";
import { PiCaretDownBold } from "react-icons/pi";
import "@/styles/components/_profile_picture.scss";
import "@/styles/components/_icons.scss";

export const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <div className="profile-image-wrapper">
        <Image
          src={"https://desafio.eadplataforma.com/front/assets/ronaldo.jpg"}
          alt="Foto de perfil"
          fill
        />
      </div>
      <PiCaretDownBold className="profile-arrow-icon" />
    </div>
  );
};
