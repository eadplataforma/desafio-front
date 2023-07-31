"use client";
import "@/styles/components/_icons.scss";
import "@/styles/components/_profile_picture.scss";

import Image from "next/image";

interface Props {
  size?: "sm" | "md" | "lg" | "xl";
  url: string;
}

export const ProfilePicture = ({ size = "lg", url }: Props) => {
  return (
    <div className={`profile-image-wrapper ${size}`}>
      <Image src={url} alt="Foto de perfil" fill />
    </div>
  );
};
