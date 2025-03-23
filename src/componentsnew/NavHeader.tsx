"use client";
import React from "react";
import styles from "./NavHeader.module.css";

export const NavHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/527ef045df7dde52d3bd662268ef842d27f9a07c?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        alt="Background"
        className={styles.backgroundImage}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4474ad5ccf91ddb78660fddfff4f71acf313114e?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        alt="Logo"
        className={styles.logo}
      />
      <nav className={styles.navigation}>
        <div className={styles.menu}>
          <a href="#articles" className={styles.menuItem}>
            Articles
          </a>
          <a href="#books" className={styles.menuItem}>
            Books
          </a>
        </div>
        <div className={styles.separator} />
        <a href="#login" className={styles.loginLink}>
          Login
        </a>
      </nav>
    </header>
  );
};
