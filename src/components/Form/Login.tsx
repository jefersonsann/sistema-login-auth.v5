"use client";

import { login } from "@/actions/login";
import Button from "@/components/Button";
import { Input, InputPassword } from "@/components/Input";
import ErrorMessage from "@/helper/error-message";
import SuccessMessage from "@/helper/success-message";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      usermail: "",
      password: "",
    },
  });

  const onSubmit = (values: Schema) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nome de usuário ou email"
        type="text"
        id="usermail"
        {...register("usermail")}
        disabled={isPending}
        errors={errors}
        required
      />
      <InputPassword
        label="Senha"
        type="password"
        id="password"
        {...register("password")}
        disabled={isPending}
        errors={errors}
        required
      />

      <Link
        style={{
          display: "block",
          fontSize: ".9rem",
          margin: ".5rem .5rem 2rem",
          color: "var(--colors-primary-400)",
        }}
        href={"/forgot"}
      >
        Perdeu a senha?
      </Link>
      <ErrorMessage message={error} />
      <SuccessMessage message={success} />

      <Button type="submit" disabled={isPending}>
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
