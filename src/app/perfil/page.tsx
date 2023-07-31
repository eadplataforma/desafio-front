"use client";
import "@/styles/layouts/_perfil.scss";

import { HeaderMobile, Navbar, ProfilePicture } from "@/components";
import { DataContext } from "@/context/UsersContext";
import { useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Card } from "antd";
import { useRouter } from "next/navigation";

export default function PerfilPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const router = useRouter();
  const { currentUser } = useContext(DataContext);

  useEffect(() => {
    if (!currentUser) {
      router.replace("/");
    }
  }, [currentUser]);

  return (
    <div className="page-container">
      {!isMobile && <Navbar />}
      <div className="content-wrapper">
        {isMobile ? (
          <HeaderMobile />
        ) : (
          <div className="header-wrapper">
            <h1 className="header-title">Perfil</h1>
          </div>
        )}
        <main className="page-main">
          <Card title="Informações de Perfil" bordered={false}>
            <div className="info-container">
              <div className="info-wrapper">
                <p className="info-text">{currentUser?.name}</p>
                <p className="info-text">{currentUser?.email}</p>
                <p className="info-text">{currentUser?.phone}</p>
              </div>
              <ProfilePicture url={currentUser?.photo_url || ""} size="xl" />
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
