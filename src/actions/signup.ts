"use server";

import { getUserByUsernameOrEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcrypt";
import { z } from "zod";
import sendEmailVerification from "./send-email-verification";

export const signup = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Credenciais invalidas." };
  }

  const { name, username, email, password } = validatedField.data;

  const existeUserEmail = await getUserByUsernameOrEmail(email);
  const existeUserUsername = await getUserByUsernameOrEmail(username);

  if (existeUserEmail) return { error: "Este email já esta cadastrado." };

  if (existeUserUsername)
    return { error: "Este nome e usuário já existe! Por favor tente outro." };

  const hashPassword = await bcrypt.hash(password, 12);

  await db.user.create({
    data: {
      name,
      username,
      email,
      password: hashPassword,
      roleId: "USER",
    },
  });

  await sendEmailVerification(email);

  return { success: "Conta criada com sucesso, por favor confirme seu email" };
};
