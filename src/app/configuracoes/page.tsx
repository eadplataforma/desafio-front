"use client";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { ThemeContext } from "@/context/ThemeContext";
import "@/styles/layouts/_configuracoes.scss";
import { Switch } from "antd";
import { useContext } from "react";

export default function ConfiguracoesPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <div className="header-wrapper">
          <h1 className="header-title">Configurações</h1>
        </div>
        <main className="page-main">
          <SectionTitle>Tema</SectionTitle>
          <div className="theme-switcher-wrapper">
            <span className="theme-switcher-label">Claro</span>
            <Switch
              checked={theme === "dark"}
              onChange={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
            <span className="theme-switcher-label">Escuro</span>
          </div>
        </main>
      </div>
    </div>
  );
}
