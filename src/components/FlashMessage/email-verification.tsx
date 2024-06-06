"use client";

import sendEmailVerification from "@/actions/send-email-verification";
import { startTransition, useState } from "react";
import styles from "./email-verification.module.css";

const SendVerificationEmailFlashMessage = (email: string) => {
  const [success, setSuccess] = useState<string | undefined>("");

  const handleClick = async () => {
    setSuccess("");

    startTransition(() => {
      sendEmailVerification(email).then((data) => {
        setSuccess(data?.success);
      });
    });
  };

  return success ? (
    success
  ) : (
    <button className={styles.ct} onClick={handleClick}>
      Click aqui para receber email para confirmação
    </button>
  );
};

export default SendVerificationEmailFlashMessage;
