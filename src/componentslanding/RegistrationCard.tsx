import React from "react";
import styles from "./RegistrationCard.module.css";

interface RegistrationCardProps {
  type: "kanya" | "suvahini";
  title: string;
  subtitle: string;
  imageSrc: string;
  decorationSrc: string;
}

export function RegistrationCard({
  type,
  title,
  subtitle,
  imageSrc,
  decorationSrc,
}: RegistrationCardProps) {
  return (
    <article className={`${styles.card} ${styles[type]}`}>
      <div className={styles.content}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.separator} />
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <button className={styles.registerButton}>REGISTER</button>
      </div>
      <img src={decorationSrc} alt="Decoration" className={styles.decoration} />
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </div>
    </article>
  );
}
