import "./Button.scss";

interface ButtonProps {
  styling: "outlined" | "filled";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: (...args: any) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  styling,
  children,
  type,
  onClick,
  className,
}) => {
  const classNames = `button ${styling ? `button--${styling}` : ""} ${className}`;
  return (
    <button className={classNames} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
