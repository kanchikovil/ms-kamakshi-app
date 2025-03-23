import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0d60fd547501eb89293e2dbcbfaac647c8d11aa?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="Copyright icon"
          className={styles.copyrightIcon}
        />
        <p className={styles.copyright}>2025, Manasasmarami Kamakshi</p>
      </div>
    </footer>
  );
}
