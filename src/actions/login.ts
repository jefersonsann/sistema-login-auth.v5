"use server";

import { signIn } from "@/auth";
import { getUserByUsernameOrEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schema";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Valida os dados do formulário com Zod
  const validatedField = LoginSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Credenciais invalidas." };
  }

  const { usermail, password } = validatedField.data;

  const existingUser = await getUserByUsernameOrEmail(usermail);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email ou nome de usuário não existe." };
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);
  if (!passwordMatch)
    return { error: "Senha incorreta, porfavor tente novamente!" };

  try {
    await signIn("credentials", {
      usermail,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return { success: "Login efetuado com sucesso" };
  } catch (error: unknown) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Usuário ou senha inválidos", status: "error" };
        default:
          return { error: "Somenthing went wrong", status: "error" };
      }
    }
    throw error;
  }
};
