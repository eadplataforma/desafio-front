import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import "@/styles/layouts/_dashboard.scss";

export default function DashboardPage() {
  return (
    <div className="page-container">
      <Navbar />
      <Header />
    </div>
  );
}
