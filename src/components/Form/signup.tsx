"use client";

import { signup } from "@/actions/signup";
import Button from "@/components/Button";
import { Input, InputPassword } from "@/components/Input";
import ErrorMessage from "@/helper/error-message";
import SuccessMessage from "@/helper/success-message";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Schema = z.infer<typeof RegisterSchema>;

const SignupForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: Schema) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      signup(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Seu nome"
        type="text"
        id="name"
        {...register("name")}
        disabled={isPending}
        errors={errors}
        required
      />
      <Input
        label="Username"
        type="text"
        id="username"
        {...register("username")}
        disabled={isPending}
        errors={errors}
        required
      />
      <Input
        label="E-mail"
        type="email"
        id="email"
        {...register("email")}
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

      <InputPassword
        label="Confirmar Senha"
        type="password"
        id="confirmPassword"
        {...register("confirmPassword")}
        disabled={isPending}
        errors={errors}
        required
      />
      <ErrorMessage message={error} />
      <SuccessMessage message={success} />

      <Button type="submit" disabled={isPending}>
        Cadastrar
      </Button>
    </form>
  );
};

export default SignupForm;
