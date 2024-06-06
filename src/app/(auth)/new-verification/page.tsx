import Box from "@/components/Box";
import Button from "@/components/Button";
import NewVerificationForm from "@/components/Form/new-verification-form";
import Link from "next/link";
import styles from "../login/login-page.module.css";

const NewVerificationPage = () => {
  return (
    <Box>
      <h1 className={styles.title}>Confirmando email</h1>
      <NewVerificationForm />
      <span className="divisor"></span>
      <Link href="/login" title="go to login">
        <Button variable="outline">voltar para login</Button>
      </Link>
    </Box>
  );
};

export default NewVerificationPage;
