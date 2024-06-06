import SvgChevron from "@/assets/svg/chevron";
import Box from "@/components/Box";
import Button from "@/components/Button";
import LoginForm from "@/components/Form/Login";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./login-page.module.css";

export const metadata: Metadata = {
  title: "Login",
  description: "Faça login da sua conta.",
};

const LoginPage = () => {
  return (
    <Box>
      <h1 className={styles.title}>Acesse sua conta</h1>
      <LoginForm />
      <span className="divisor"></span>
      <Button variable="outline">
        <Link href="/signup" title="Go to signup" className={styles.signup}>
          <div className={styles.text}>
            <span>Não tem uma conta?</span>
            <span className="color-primary">Se inscreva gratuitamente</span>
          </div>
          <div className={styles.icon}>
            <SvgChevron />
          </div>
        </Link>
      </Button>
    </Box>
  );
};

export default LoginPage;
