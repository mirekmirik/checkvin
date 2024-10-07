import "./Heading.scss";

interface HeadingProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  className = "",
  highlighted = false,
  children,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const highlightedClassName = highlighted ? "highlighted" : "";
  const classNames = `heading heading--${level} ${className} ${highlightedClassName}`;
  return <Tag className={classNames}>{children}</Tag>;
};

export default Heading;
