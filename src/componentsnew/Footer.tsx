import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/05756ea6dadb1e94ae456990a2007671e9e20cdf?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="Footer Icon"
          className={styles.icon}
        />
        <p className={styles.copyright}>2025, Manasasmarami Kamakshi</p>
      </div>
    </footer>
  );
};
