"use client";
import { Input } from "antd";
import { HiOutlineSearch } from "react-icons/hi";

interface Props {
  className: string;
}

const onSearch = (value: string) => console.log(value);

export const Searchbar = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <Input
        size="large"
        placeholder="Busque por clientes"
        prefix={<HiOutlineSearch className="search-icon" />}
        style={{ borderRadius: "100rem", flex: 1 }}
      />
    </div>
  );
};
