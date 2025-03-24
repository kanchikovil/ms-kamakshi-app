"use client";
import React from "react";
import styles from "./RegistrationStatusCard.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Typography } from "@mui/material";

interface Event {
  date: string;
  time: string;
  title: string;
}

const events: Event[] = [
  { date: "10/03/2025", time: "06.30 am", title: "Golder Deer Vahanam" },
  { date: "10/03/2025", time: "07.30 pm", title: "Silver Vrushabha Vahanam" },
  { date: "10/03/2025", time: "06.30 pm", title: "Silver Deer Vahanam" },
];

const RegistrationStatusCard: React.FC = () => {
  return (
    <>
      <section className={styles.cardContainer}>
        {/* Registration Check Section */}
        <h2 className={styles.title}>Check your registration status</h2>
        <div className={styles.registrationCheck}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter Aadhar / Mobile number"
              className={styles.input}
            />
            <button className={styles.checkButton}>CHECK STATUS</button>
          </div>
          {/* Scheduled Status */}
          <div className={styles.scheduledStatus}>
            <CalendarMonthIcon className={styles.icon} />
            <div>
              <Typography className={styles.statusLabel}>Scheduled</Typography>
              <Typography style={{ fontWeight: 700, fontSize: '10px' }} className={styles.date}>25/03/2025</Typography>
              <Typography style={{ fontWeight: 700, fontSize: '10px' }} className={styles.time}>07.30 PM</Typography>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className={styles.eventsSection}>
          <div className={styles.eventsHeader}>
            <div className={styles.eventsTitle}>
              <EmojiEventsIcon className={styles.icon} />
              <h3>Upcoming Events</h3>
            </div>
            <a href="#" className={styles.viewAll}>
              VIEW ALL →
            </a>
          </div>

          <ul className={styles.eventList}>
            {events.map((event, index) => (
              <li key={index} className={styles.eventItem}>
                <span className={styles.eventDate}>{event.date}</span>
                <span className={styles.eventTime}>{event.time}</span>
                <span className={styles.eventTitle}>{event.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className={styles.statusCardFooterWrapper}>
        <Typography style={{fontSize: 50, fontWeight: 100}} className={styles.footerHeading}>a divine<br />experience</Typography>
        <div className={styles.footerDecorHolder}><img height={150} src={"../images/status-card-footer-decor.png"} /></div>
      </div>
    </>
  );
};

export default RegistrationStatusCard;
