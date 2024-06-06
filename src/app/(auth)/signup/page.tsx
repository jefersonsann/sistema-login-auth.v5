import SvgChevron from "@/assets/svg/chevron";
import Box from "@/components/Box";
import Button from "@/components/Button";
import SignupForm from "@/components/Form/signup";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../login/login-page.module.css";

export const metadata: Metadata = {
  title: "Crie sua conta",
  description: "Crie sua conta no jeferosnsann.com",
};

const SignupPage = () => {
  return (
    <Box>
      <h1 className={styles.title}>Cadastre-se</h1>
      <SignupForm />
      <span className="divisor"></span>
      <Button variable="outline">
        <Link href="/login" title="Go to signup" className={styles.signup}>
          <div className={styles.text}>
            <span>Já tem uma conta?</span>
            <span className="color-primary">Fazer Login</span>
          </div>
          <div className={styles.icon}>
            <SvgChevron />
          </div>
        </Link>
      </Button>
    </Box>
  );
};

export default SignupPage;
