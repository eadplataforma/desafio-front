import "@/styles/components/_dashboard_info_card.scss";

interface Props {
  title: string;
  content: string;
}

export const DashboardInfoCard = ({ title, content }: Props) => {
  return (
    <div className="dashboard-card-wrapper">
      <p className="title">{title}</p>
      <p className="content">{content}</p>
    </div>
  );
};
