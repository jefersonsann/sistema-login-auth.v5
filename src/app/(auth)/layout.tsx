import SvgAuthPage from "@/assets/svg/online-dicusson";
import Logo from "@/components/Logo/Logo";
import styles from "./layout.module.css";

const AuthLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className={styles.ct}>
      <div className={styles.left}>
        <SvgAuthPage />
      </div>
      <div className={styles.wp}>
        <div className={styles.logo}>
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
