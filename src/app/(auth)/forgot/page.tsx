import SvgChevron from "@/assets/svg/chevron";
import Box from "@/components/Box";
import ForgotForm from "@/components/Form/forgot";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../login/login-page.module.css";

export const metadata: Metadata = {
  title: "Recuperar senha",
  description: "Digite seu email para recuperar sua senha | jeferosnsann.com",
};

const ForgotPage = () => {
  return (
    <Box>
      <h1 className={styles.title}>Esqueci minha senha</h1>
      <ForgotForm />
      <Link
        href="/login"
        title="Go to login"
        style={{ justifyContent: "center", gap: "1rem" }}
        className={styles.signup}
      >
        <div className={styles.icon}>
          <SvgChevron style={{ transform: "rotate(180deg)", order: "-1" }} />
        </div>
        <div className={styles.text}>
          <span>Voltar para login</span>
        </div>
      </Link>
    </Box>
  );
};

export default ForgotPage;
