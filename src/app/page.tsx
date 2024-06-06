import { UserCard } from "@/components/UserCard";
import { currentUser } from "@/lib/auth";
import ButtonLogout from "./(protected)/settings/ButtonLogout";
import styles from "./home-page.module.css";

export default async function Home() {
  const user = await currentUser();

  return (
    <main className={styles.ct}>
      {user ? <UserCard /> : <h1>Pagina inicial</h1>}
      <div className="container">
        <ButtonLogout />
      </div>
    </main>
  );
}
