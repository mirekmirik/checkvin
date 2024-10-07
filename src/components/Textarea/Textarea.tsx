import "./Textarea.scss";

interface TextareaProps {
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  placeholder,
  required = false,
}) => {
  const classNames = `textarea ${className}`;

  return (
    <textarea
      className={classNames}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Textarea;
