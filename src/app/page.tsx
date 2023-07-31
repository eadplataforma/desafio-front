"use client";
import "@/styles/layouts/_dashboard.scss";

import { UserStatus } from "@/interfaces/users";
import { moneyFormat } from "@/utils/moneyFormat";
import { useMediaQuery } from "react-responsive";
import { DataContext } from "@/context/UsersContext";
import { useContext, useEffect, useMemo, useState } from "react";
import {
  Header,
  Navbar,
  UsersTable,
  HeaderMobile,
  SectionTitle,
  DashboardInfoCard,
} from "@/components";

export default function DashboardPage() {
  const { users, fetchPage, pagination } = useContext(DataContext);
  const [inadimplentes, setInadimplentes] = useState(0);
  const [adimplentes, setAdimplentes] = useState(0);
  const [totalArrecadado, setTotalArrecadado] = useState(0);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  useEffect(() => {
    if (users.length === 0) {
      fetchPage(1);
    }
  }, []);

  const logUsers = useMemo(() => {
    return () => {
      let tempInadimplentes = 0;
      let tempAdimplentes = 0;
      let tempTotal = 0;
      users.forEach((user) => {
        if (user.status === UserStatus.Adimplente) tempAdimplentes++;
        else if (user.status === UserStatus.Inadimplente) tempInadimplentes++;
        tempTotal += parseFloat(user.amount);
      });
      setAdimplentes(tempAdimplentes);
      setInadimplentes(tempInadimplentes);
      setTotalArrecadado(tempTotal);
    };
  }, [users]);

  useEffect(() => {
    logUsers();
  }, [logUsers]);

  return (
    <div className="page-container">
      {!isMobile && <Navbar />}
      <div className="content-wrapper">
        {isMobile ? <HeaderMobile /> : <Header />}
        <main className="page-main">
          <SectionTitle>Visão Geral</SectionTitle>
          <div className="cards-wrapper">
            <DashboardInfoCard
              title="Total de clientes"
              content={(pagination.offset + pagination.rows).toString()}
            />
            <DashboardInfoCard
              title="Total inadimplentes"
              content={inadimplentes.toString()}
            />
            <DashboardInfoCard
              title="Total adimplentes"
              content={adimplentes.toString()}
            />
            <DashboardInfoCard
              title="Total arrecadado"
              content={moneyFormat(totalArrecadado)}
            />
          </div>
          <SectionTitle>Clientes cadastrados</SectionTitle>
          <UsersTable />
        </main>
      </div>
    </div>
  );
}
