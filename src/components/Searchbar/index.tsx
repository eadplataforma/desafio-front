"use client";
import { Input } from "antd";
import { HiOutlineSearch } from "react-icons/hi";
import "@/styles/components/_icons.scss";
import "@/styles/components/_searchbar.scss";
import "@/styles/components/_buttons.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  className: string;
  initialValue?: string;
}

export const Searchbar = ({ className, initialValue = "" }: Props) => {
  const [search, setSearch] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("q", search);

    //router.push(`/busca?${params.toString()}`);
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          size="large"
          placeholder="Busque por clientes"
          prefix={
            <button type="submit" className="search-button">
              <HiOutlineSearch className="search-icon" />
            </button>
          }
          style={{ borderRadius: "100rem", flex: 1 }}
          className="searchbar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
