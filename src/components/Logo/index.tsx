import Image from "next/image";

interface Props {
  width?: number;
}

export const Logo = ({ width = 147 }: Props) => {
  const ratio = 147 / 81;
  return (
    <Image
      src={"/logo.png"}
      alt="EAD Plataforma"
      width={width}
      height={width / ratio}
      priority
    />
  );
};
