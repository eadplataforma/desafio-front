import "@/styles/components/_section_title.scss";

interface Props {
  children: string;
}

export const SectionTitle = ({ children }: Props) => {
  return <h1 className="section-title-text">{children}</h1>;
};
