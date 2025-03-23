import React from "react";
import styles from "./InstructionsPanel.module.css";

export const InstructionsPanel: React.FC = () => {
  return (
    <aside className={styles.instructions}>
      <h2 className={styles.title}>
        Kroothi Nama Samvatsara Sharadha <br />
        Navaratri Mahotsavam 2025
      </h2>
      <hr className={styles.divider} />

      <h3 className={styles.subtitle}>
        Kanya who hasn't started her menstrual cycle should enroll and adhere to
        the following guidelines
      </h3>

      <div className={styles.guideline}>
        <div className={styles.guidelineHeader}>
          <div className={styles.count}>01</div>
          <hr className={styles.divider} />
        </div>
        <p className={styles.guidelineText}>
          Only one parent of guardian is permitted to accompany Kanya to the
          designated location (Sri Kamakshi Kalyana Mandapam, North Mada Street,
          Big Kanchipuram Tamil Nadu 631 502) by 7.00 am
        </p>
      </div>

      <div className={styles.guideline}>
        <div className={styles.guidelineHeader}>
          <div className={styles.count}>02</div>
          <hr className={styles.divider} />
        </div>
        <p className={styles.guidelineText}>
          Following breakfast, the participant should proceed with the rituals
          of Vastra Dharanam and Sowmangalya Bhushanams. By 09.30am, a
          procession will commence towards Ambal Devasthanam (Vasantha Mandapam)
          The pooja will then take place, lasting for a duration of 90 minutes.
          After the pooja lunch will be served at the Kalyana Mandapam
        </p>
      </div>

      <hr className={styles.divider} />

      <section className={styles.contactInfo}>
        <h4 className={styles.contactTitle}>For further details Contact</h4>
        <div className={styles.contactNumbers}>
          <a href="tel:9087127224" className={styles.phoneNumber}>
            9087127224
          </a>
          <a href="tel:9944350007" className={styles.phoneNumber}>
            9944350007
          </a>
        </div>
      </section>

      <hr className={styles.divider} />

      <div className={styles.locationInfo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e76fe695e8898b25ab5be1b3796f4125a67b855?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          alt="QR Code"
          className={styles.qrCode}
        />
        <p className={styles.scanText}>
          Scan to locate the <br />
          Mandapam
        </p>
      </div>
    </aside>
  );
};
