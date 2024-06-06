import { auth } from "@/auth";

export const currentUser = async () => {
  const session = await auth();
  // usar em server components
  return session?.user;
};
