import { auth, signOut } from "@/auth";
import Button from "@/components/Button";
import Link from "next/link";

const ButtonLogout = async () => {
  const section = await auth();
  return (
    <>
      {section ? (
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <Button type="submit" variable="outline">
            Sair
          </Button>
        </form>
      ) : (
        <Link href="/login" title="Go to login">
          <Button>login</Button>
        </Link>
      )}
    </>
  );
};

export default ButtonLogout;
