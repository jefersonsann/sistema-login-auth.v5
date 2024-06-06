import SvgUserIcon from "@/assets/svg/user-icon";
import SvgVerified from "@/assets/svg/verified";
import LoginButton from "@/components/(auth)/button";
import { currentUser } from "@/lib/auth";
import Image from "next/image";
import { Modal } from "../modal";
import styles from "./user-card.module.css";

export const UserCard = async () => {
  const user = await currentUser();

  if (!user) return null;

  return user ? (
    <div className={styles.ct}>
      <div className={styles.user}>
        <Modal>
          {user.image ? (
            <Image
              className={styles.avatar}
              src={user.image}
              width={250}
              height={250}
              priority={true}
              alt={`foto de ${user.name}`}
            />
          ) : (
            <SvgUserIcon
              style={{ width: "5rem", height: "5rem", opacity: "0.4" }}
            />
          )}
        </Modal>
        <div className={styles.moreInfo}>
          <h1>
            {user.name}
            {user.verified && (
              <div className={styles.verified}>
                <SvgVerified />
              </div>
            )}
          </h1>
          {user.username && (
            <div className={styles.username}>
              <span>@</span>
              {user.username}
            </div>
          )}
          {user.email && <div className={styles.email}>{user.email}</div>}
        </div>
      </div>
    </div>
  ) : (
    <LoginButton>Fazer Login</LoginButton>
  );
};
