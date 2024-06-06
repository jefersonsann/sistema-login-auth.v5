import SvgIconLogo from "@/assets/svg/icon-svg";
import SvgJeferson from "@/assets/svg/jeferson-svg";
import SvgSantos from "@/assets/svg/santos-svg";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.ct}>
      <SvgIconLogo />
      <span className={styles.divisor}></span>
      <div className={styles.wp}>
        <div className={styles.name}>
          <SvgJeferson />
        </div>
        <div className={styles.lastname}>
          <SvgSantos />
        </div>
      </div>
    </div>
  );
};

export default Logo;
