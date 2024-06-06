"use server";
import { db } from "@/lib/db";
import { readdir, unlink, writeFile } from "fs/promises";
import { join } from "path";
import { cache } from "react";

export const userPhoto = cache(async (values: FormData) => {
  const file: File = values.get("image") as File;
  const id = values.get("id") as string;

  if (!file && !id) return { error: "Não foi possível atualizar a foto" };

  const type = file.type.split("/").pop();

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const BASE_URL = join("./", "public/images/");

  // Listar todos os arquivos com o mesmo ID na pasta
  const files = await readdir(BASE_URL);
  const filesToDelete = files.filter((fileName) =>
    fileName.startsWith(`${id}.`)
  );

  // Excluir todos os arquivos encontrados
  await Promise.all(
    filesToDelete.map(async (fileName) => {
      const filePath = join(BASE_URL, fileName);
      try {
        await unlink(filePath);
      } catch (error) {
        // Se ocorrer um erro, pode ser porque o arquivo não existe, continuar sem fazer nada.
      }
    })
  );

  // Escrever o novo arquivo
  const path = join(BASE_URL, `${id}.${type}`);
  await writeFile(path, buffer);

  try {
    await db.user.upsert({
      where: { id },
      update: {
        image: `${process.env.BASE_URL}images/${id}.${type}`,
      },
      create: {
        image: `${process.env.BASE_URL}images/${id}.${type}`,
      },
    });
    return { success: "Foto atualizada" };
  } catch (error) {
    return { error: ` err0: ${error}` };
  }
});
