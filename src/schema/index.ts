import { z } from "zod";

export const LoginSchema = z.object({
  usermail: z
    .string()
    .min(1, {
      message: "Por favor digite um usuário ou e-mail valido.",
    })
    .toLowerCase(),
  password: z.string(),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Nome é obrigatório.",
    }),
    username: z
      .string()
      .min(1, { message: "Nome de usuário é obrigatório." })
      .toLowerCase(),
    email: z
      .string()
      .min(1, {
        message: "Por favor digite um usuário ou e-mail valido.",
      })
      .toLowerCase(),
    password: z.string().min(5, {
      message: "A senha deve ter no mínimo 5 caracteres.",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas devem ser iguais.",
        path: ["confirmPassword"],
      });
    }
  });

export const EditUserSchema = z.object({
  name: z.string().optional(),
});
