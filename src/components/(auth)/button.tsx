"use client";

import LoginForm from "@/components/Form/Login";
import { useRouter } from "next/navigation";
import styles from "./button.module.css";

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const route = useRouter();

  const onClick = () => {
    route.push("/login");
  };

  if (mode === "modal") {
    return (
      <span>
        <LoginForm />
      </span>
    );
  }

  return (
    <span onClick={onClick} className={styles.ct}>
      {children}
    </span>
  );
};

export default LoginButton;
