"use client";
import { DashboardInfoCard } from "@/components/DashboardInfoCard";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { UsersTable } from "@/components/UsersTable";
import { DataContext } from "@/context/UsersContext";
import { UserStatus } from "@/interfaces/users";
import "@/styles/layouts/_dashboard.scss";
import { moneyFormat } from "@/utils/moneyFormat";
import { useContext, useEffect, useMemo, useState } from "react";

export default function DashboardPage() {
  const { users, changePage, pagination } = useContext(DataContext);
  const [inadimplentes, setInadimplentes] = useState(0);
  const [adimplentes, setAdimplentes] = useState(0);
  const [totalArrecadado, setTotalArrecadado] = useState(0);
  useEffect(() => {
    if (users.length === 0) {
      changePage(1);
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
      <Navbar />
      <div className="content-wrapper">
        <Header />
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
