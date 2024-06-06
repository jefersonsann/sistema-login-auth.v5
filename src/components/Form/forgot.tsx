"use client";

import { signup } from "@/actions/signup";
import ErrorMessage from "@/helper/error-message";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Button";
import { Input } from "../Input";

const ForgotForm = () => {
  const [state, action] = useFormState(signup, {
    ok: false,
    error: "",
    data: null,
  });

  const FormButton = () => {
    const { pending } = useFormStatus();
    return pending ? (
      <Button type="submit" disabled={pending}>
        Carregando...
      </Button>
    ) : (
      <Button type="submit" disabled={pending}>
        Recuperar minha senha
      </Button>
    );
  };
  return (
    <form action={action}>
      <Input label="E-mail" name="email" type="email" required />
      {state.error && <p>{<ErrorMessage error={state.error} />}</p>}
      <FormButton />
    </form>
  );
};

export default ForgotForm;
