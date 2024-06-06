import styles from "./Box.module.css";

const Box = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.ct}>{children}</div>;
};

export default Box;
