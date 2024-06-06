"use client";

import { newVerification } from "@/actions/new-verification";
import ErrorMessage from "@/helper/error-message";
import SuccessMessage from "@/helper/success-message";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Por favor informe o token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      })
      .catch(() => {
        setError("Não foi possível verificar seu email");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return !error && !success ? (
    <div
      style={{
        marginBottom: "3rem",
        marginTop: "3rem",
        width: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3rem",
        backgroundColor: "var(--colors-base-1100)",
        borderRadius: "var(--border-radius-sm)",
        borderColor: "var(--colors-base-1000)",
        borderWidth: "1px",
      }}
    >
      <ClipLoader
        color="var(--colors-primary-400)"
        size={50}
        speedMultiplier={1}
      />
      <p>Seu email esta sendo confirmado, porfavor agarde!</p>
    </div>
  ) : (
    <>
      <ErrorMessage message={error} />
      {!success && <SuccessMessage message={success} />}
    </>
  );
};

export default NewVerificationForm;
