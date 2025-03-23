"use client";
import React from "react";
import styles from "./RegistrationBand.module.css";

export const RegistrationBand: React.FC = () => {
  return (
    <section className={styles.registrationBand}>
      <div className={styles.registrationHeader}>
        <div className={styles.iconBackground} />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a2bac28c3c19b176a907f8b025146f5f6e65f1?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="Registration Icon"
          className={styles.icon}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>Navarathri Registration</h1>
          <div className={styles.categoryInfo}>
            <span className={styles.category}>Kanya</span>
            <div className={styles.separator} />
            <p className={styles.ageLimit}>
              Child under <br />
              age 10
            </p>
          </div>
        </div>
      </div>

      <div className={styles.validationSection}>
        <h2 className={styles.validationTitle}>Validate Aadhar</h2>
        <p className={styles.aadharNumber}>985422416021</p>
        <button className={styles.validateButton}>VALIDATE</button>
      </div>

      <div className={styles.statusSection}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35c6e4c438f7f18f039bf5035f7f7294a6732cfd?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="Status Icon"
          className={styles.statusIcon}
        />
        <div className={styles.statusContent}>
          <p className={styles.statusLabel}>
            Aadhar
            <br />
            Status
          </p>
          <p className={styles.statusValue}>Valid</p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee63691116d68849bea67cd4407531a3c530fe23?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="Status Indicator"
          className={styles.statusIndicator}
        />
      </div>
    </section>
  );
};
