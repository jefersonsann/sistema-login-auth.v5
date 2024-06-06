import { Role, User } from "@prisma/client";
import { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  username: User["username"];
  verified: User["verified"];
  role: Role;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
