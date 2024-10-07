import "./Input.scss";

interface InputProps {
  label?: string;
  placeholder?: string;
  type: "text" | "number";
  className?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder = "",
  className,
  maxLength,
  minLength,
  required = false,
}) => {
  const classNames = `input__field ${className}`;
  return (
    <div className="input">
      <label className="input__label" htmlFor={label}>
        {label}
      </label>
      <input
        maxLength={maxLength}
        minLength={minLength}
        required={required}
        name={label}
        type={type}
        className={classNames}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
