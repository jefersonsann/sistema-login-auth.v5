import SvgWarning from "@/assets/svg/warning";
import Link from "next/link";
import Box from "../Box";
import Button from "../Button";
import styles from "./error-card.module.css";

const ErrorCard = () => {
  return (
    <div className={styles.ct}>
      <div className={styles.wp}>
        <Box>
          <div className={styles.message}>
            <SvgWarning />
            <h1>Oops! Erro ao efetuar login, porfavor tente novamente!</h1>
          </div>
          <Link href="/login" title="go to login">
            <Button variable="outline">voltar para login</Button>
          </Link>
        </Box>
      </div>
    </div>
  );
};

export default ErrorCard;
