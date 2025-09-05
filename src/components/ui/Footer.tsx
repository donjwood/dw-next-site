import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footer-outer"]}>
      <div className={styles["footer-inner"]}>
        &copy; {new Date().getFullYear()} DJW
      </div>
    </div>
  );
}
