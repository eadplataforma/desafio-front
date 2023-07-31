"use client";
import "@/styles/layouts/_configuracoes.scss";

import { Switch } from "antd";
import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "@/context/ThemeContext";
import { HeaderMobile, Navbar, SectionTitle } from "@/components";

export default function ConfiguracoesPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="page-container">
      {!isMobile && <Navbar />}
      <div className="content-wrapper">
        {isMobile ? (
          <HeaderMobile />
        ) : (
          <div className="header-wrapper">
            <h1 className="header-title">Configurações</h1>
          </div>
        )}
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
