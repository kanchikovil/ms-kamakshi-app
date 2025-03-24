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

const CardHeader: React.FC<RegistrationCardProps> = ({regType}) => (
  <header className={styles.header}>
    <h1 className={styles.title}>Kanya</h1>
    <div className={styles.divider} role="separator" />
    <p className={styles.subtitle}>{regType === "KANYA" ? "Child under age 10" : "Elderly over 40 Years"}</p>
  </header>
);

const RegisterButton: React.FC = () => (
  <button className={styles.registerButton} type="button">
    REGISTER
  </button>
);

const DecorativeImage: React.FC<RegistrationCardProps> = ({regType}) => (
  <div
    className={styles.decorativeImageWrapper}
    style={{ marginTop: "2px" }} // Move image down by 2px
  >
    <img
      src={regType === "KANYA" ? "../images/kanya-card-home.png" : "../images/suvashini-card-home.png"} // Use local image
      alt="Decorative illustration"
      className={styles.decorativeImage}
      height="100" // Adjusted height
      width="100"  // Adjusted width
    />
  </div>
);

interface RegistrationCardProps {
  regType: string;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ regType }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <section className={styles.cardContainer}>
        {/* Triangle Positioned Absolutely in the Corner */}
        <div className={styles.triangleWrapper}>
          <DecorativeTriangle />
        </div>

        <div className={styles.contentWrapper}>
          <CardHeader regType={regType} />
          <RegisterButton />
        </div>
        <DecorativeImage regType={regType} />
      </section>
    </>
  );
};
export default RegistrationCard;
