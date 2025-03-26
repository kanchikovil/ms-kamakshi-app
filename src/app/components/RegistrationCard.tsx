"use client";
import * as React from "react";
import Link from "next/link";
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

export const RegCardHeader: React.FC<RegistrationCardProps> = ({ regType }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{regType === "kanya" ? "Kanya" : "Suvahini"}</h1>
    <div className={styles.divider} role="separator" />
    <p className={styles.subtitle}>{regType === "kanya" ? "Child under age 10" : "Elderly over 40 Years"}</p>
  </header>
);

const RegisterButton: React.FC<RegistrationCardProps> = ({ regType }) => (
  <Link href={`/pages/navratri-registration?registrationType=${regType}`}>
    <button className={styles.registerButton} type="button">
      REGISTER
    </button>
  </Link>
);

const DecorativeImage: React.FC<RegistrationCardProps> = ({ regType }) => (
  <div
    className={styles.decorativeImageWrapper}
    style={{ marginTop: "2px" }} // Move image down by 2px
  >
    <img
      src={regType === "kanya" ? "../images/kanya-card-home.png" : "../images/suvashini-card-home.png"} // Use local image
      alt="Decorative illustration"
      className={styles.decorativeImage}
      height="100" // Adjusted height
      width="100"
    />
  </div>
);

interface RegistrationCardProps {
  regType: string;
}

const RegistrationCard: React.FC<RegistrationCardProps> = ({ regType }) => {
  return (
    <>
      <section className={styles.cardContainer}>
        {/* Triangle Positioned Absolutely in the Corner */}
        <div className={styles.triangleWrapper}>
          <DecorativeTriangle />
        </div>

        <div className={styles.contentWrapper}>
          <RegCardHeader regType={regType} />
          <RegisterButton regType={regType} />
        </div>
        <DecorativeImage regType={regType} />
      </section>
    </>
  );
};
export default RegistrationCard;
