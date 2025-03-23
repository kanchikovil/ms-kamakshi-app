"use client";
import * as React from "react";
import styles from "./RegistrationCard.module.css";

const DecorativeTriangle: React.FC = () => (
  <svg
    width="26"
    height="10"
    viewBox="0 0 26 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.triangle}
  >
    <path d="M13 10L25.9904 -0.5H0.00961876L13 10Z" fill="#F6F1F1" />
  </svg>
);

const CardHeader: React.FC = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>Kanya</h1>
    <div className={styles.divider} role="separator" />
    <p className={styles.subtitle}>Child under age 10</p>
  </header>
);

const RegisterButton: React.FC = () => (
  <button className={styles.registerButton} type="button">
    REGISTER
  </button>
);

const DecorativeImage: React.FC = () => (
  <div
    className={styles.decorativeImageWrapper}
    style={{ marginTop: "2px" }} // Move image down by 2px
  >
    <img
//      src="https://cdn.builder.io/api/v1/image/assets/TEMP/95d4a608e61ea433aab341d72fab1cde2e320282"
      src="../images/kanya-card-home.png" // Use local image
      alt="Decorative illustration"
      className={styles.decorativeImage}
      height="100" // Adjusted height
      width="100"  // Adjusted width
    />
  </div>
);

const RegistrationCard: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <section className={styles.cardContainer}>
        <div className={styles.contentWrapper}>
          <CardHeader />
          <RegisterButton />
        </div>
        <div
          className={styles.triangleWrapper}
          style={{ marginLeft: "-10%" }} // Move DecorativeTriangle to the left by 10%
        >
          <DecorativeTriangle />
        </div>
        <DecorativeImage />
      </section>
    </>
  );
};

export default RegistrationCard;
