import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import NextAuth from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/",
    error: "/error",
    signOut: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth Without email verification
      if (account?.provider !== "credentials") return true;

      // const existingUser = await getUserById(user.id!);
      // // Prevent signin without email verification
      // if (!existingUser?.emailVerified) return false;

      // TODO: add 2FA checked

      return true;
    },
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      if (session.user) {
        // Inserindo novos campos a session global
        session.user.username = token.username as string;
        session.user.verified = token.verified as boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existUser = await getUserById(token.sub);

      if (!existUser) return token;

      token.name = existUser.name;
      token.username = existUser.username;
      token.email = existUser.email;
      token.verified = existUser.verified;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
