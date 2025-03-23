"use client";
import React, { useState } from "react";
import styles from "./RegistrationStatus.module.css";

export function RegistrationStatus() {
  const [registrationId, setRegistrationId] = useState("");

  return (
    <section className={styles.statusSection}>
      <h2 className={styles.title}>Check your registration status</h2>
      <div className={styles.content}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter Aadhar / Mobile number"
            value={registrationId}
            onChange={(e) => setRegistrationId(e.target.value)}
          />
          <button className={styles.checkButton}>CHECK STATUS</button>
        </div>
        <div className={styles.status}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0af0fbc0ef51400f1cbbbab8680e5aafd7677d80?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            alt="Status icon"
            className={styles.statusIcon}
          />
          <div className={styles.statusText}>
            <p className={styles.statusTitle}>Scheduled</p>
            <p className={styles.statusDate}>
              25/03/2025
              <br />
              07.30 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
