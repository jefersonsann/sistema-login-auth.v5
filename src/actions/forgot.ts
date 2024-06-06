"use server";

import apiError from "@/functions/apiMessage";

export const forgot = (state: {}, formData: FormData) => {
  const email = formData.get("email") as string | null;

  const listEmail = "me@jefersonsann.com";

  try {
    if (!email) throw new Error("Por favor digite um email valido.");
    else if (email !== listEmail) throw new Error("Usuário não encontrado");

    return { ok: true, data: null, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
};
