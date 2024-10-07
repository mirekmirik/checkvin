import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  const classNames = `container ${className}`;
  return <div className={classNames}>{children}</div>;
};

export default Container;
