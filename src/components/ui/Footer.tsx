import clsx from "clsx";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles["footer-outer"]}>
      <div className={clsx(styles["footer-inner"], "container")}>
        &copy; {new Date().getFullYear()} DJW
      </div>
    </div>
  );
}
