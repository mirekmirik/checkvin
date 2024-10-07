import "./Paragraph.scss";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  const classNames = "paragraph " + className;

  return <p className={classNames}>{children}</p>;
};

export default Paragraph;
