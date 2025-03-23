import React from "react";
import styles from "./UpcomingEvents.module.css";

export function UpcomingEvents() {
  return (
    <section className={styles.eventsSection}>
      <div className={styles.header}>
        <div className={styles.title}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c905650f868200e3dfd48287b14c5db7bef930d3?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            alt="Calendar"
            className={styles.calendarIcon}
          />
          <h2>Upcoming Events</h2>
        </div>
        <button className={styles.viewAllButton}>
          VIEW ALL
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/765307b54763fcc0020b26aa606afc9d16d6c176?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            alt="Arrow"
            className={styles.arrowIcon}
          />
        </button>
      </div>
      <ul className={styles.eventsList}>
        <li className={styles.eventItem}>
          <time className={styles.date}>10/03/2025</time>
          <p className={styles.eventDescription}>
            <span className={styles.time}>06.30 am</span>
            <span className={styles.eventName}>Golder Deer Vahanam</span>
          </p>
        </li>
        <li className={styles.eventItem}>
          <time className={styles.date}>10/03/2025</time>
          <p className={styles.eventDescription}>
            <span className={styles.time}>07.30 pm</span>
            <span className={styles.eventName}>Silver Vrushabha Vahanam</span>
          </p>
        </li>
        <li className={styles.eventItem}>
          <time className={styles.date}>10/03/2025</time>
          <p className={styles.eventDescription}>
            <span className={styles.time}>06.30 pm</span>
            <span className={styles.eventName}>Silver Deer Vahanam</span>
          </p>
        </li>
      </ul>
    </section>
  );
}
