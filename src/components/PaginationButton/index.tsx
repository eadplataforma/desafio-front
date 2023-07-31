import "@/styles/components/_buttons.scss";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export const PaginationButton = ({ title, onClick, disabled }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`pagination-button ${disabled ? "disabled" : ""}`}
    >
      {title}
    </button>
  );
};
