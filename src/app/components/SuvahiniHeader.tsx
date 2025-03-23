import * as React from "react";
import styles from "./Suvahini.module.css";

export const SuvahiniHeader: React.FC = () => {
  return (
    <header className={styles.content}>
      <h1 className={styles.suvahini2}>Suvahini</h1>
      <div className={styles.div} />
      <p className={styles.elderlyover40Years}>
        Elderly <br />
        over 40 Years
      </p>
    </header>
  );
};
