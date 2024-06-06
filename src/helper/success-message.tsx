import SvgVerified from "@/assets/svg/verified";
import styles from "./success-message.module.css";

interface SuccessMessageProps {
  message?: string;
}

const SuccessMessage = ({ message }: SuccessMessageProps) => {
  if (!message) return null;
  else
    return (
      <div className={styles.ct}>
        <SvgVerified />
        <p className={styles.text}>{message}</p>
      </div>
    );
};

export default SuccessMessage;
