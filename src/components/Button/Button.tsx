import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  variable,
  color,
  ...props
}) => {
  const variabled = variable || "default";
  const colors = color || "default";
  const renderVariable = (param: string) => {
    switch (param) {
      case "outline":
        return styles.outline;
      default:
        return styles.default;
    }
  };
  const renderColor = (param: string) => {
    switch (param) {
      case "primary":
        return styles.primary;
      default:
        return styles.base;
    }
  };

  return (
    <button
      className={`${styles.ct} ${renderVariable(variabled)} ${renderColor(
        colors
      )}`}
      {...props}
    >
      {icon && <i className={styles.icon}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
