import SvgWarning from "@/assets/svg/warning";
import styles from "./error-message.module.css";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  else
    return (
      <div className={styles.ct}>
        <SvgWarning />
        <p className={styles.text}>{message}</p>
      </div>
    );
};

export default ErrorMessage;
