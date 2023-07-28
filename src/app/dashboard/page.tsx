import { DashboardInfoCard } from "@/components/DashboardInfoCard";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { SectionTitle } from "@/components/SectionTitle";
import { UsersTable } from "@/components/UsersTable";
import "@/styles/layouts/_dashboard.scss";

export default function DashboardPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <Header />
        <main className="page-main">
          <SectionTitle>Visão Geral</SectionTitle>
          <div className="cards-wrapper">
            <DashboardInfoCard title="Total de clientes" content="15" />
            <DashboardInfoCard title="Total de clientes" content="15" />
            <DashboardInfoCard title="Total de clientes" content="15" />
            <DashboardInfoCard title="Total de clientes" content="15" />
          </div>
          <SectionTitle>Clientes cadastrados</SectionTitle>
          <UsersTable />
        </main>
      </div>
    </div>
  );
}
