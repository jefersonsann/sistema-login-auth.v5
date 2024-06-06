import { db } from "@/lib/db";

export const getUserByUsernameOrEmail = async (value: string) => {
  try {
    const user = await db.user.findFirst({
      where: {
        OR: [
          {
            username: value,
          },
          {
            email: value,
          },
        ],
      },
    });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
