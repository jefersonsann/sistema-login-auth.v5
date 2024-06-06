import { getUserByUsernameOrEmail } from "@/data/user";
import { LoginSchema } from "@/schema";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [
    Credentials({
      async authorize(credentials, req) {
        const validatedField = LoginSchema.safeParse(credentials);

        if (validatedField.success) {
          const { usermail, password } = validatedField.data;

          const user = await getUserByUsernameOrEmail(usermail);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
