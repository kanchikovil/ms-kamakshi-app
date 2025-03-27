"use client";
import React from "react";
import styles from "./RegistrationStatusCard.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Button, TextField, Typography } from "@mui/material";

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

  const checkRegStatusByAadhar = () => {
    
  }

  return (
    <>
      <section className={styles.cardContainer}>
        {/* Registration Check Section */}
        <h2 className={styles.title}>Check your registration status</h2>
        <div className={styles.registrationCheck}>
          <div className={styles.inputGroup}>
            <TextField
              placeholder="Enter Aadhar / Mobile number"
              type="text" // Use "text" instead of "number"
              inputProps={{
                maxLength: 12,
                inputMode: "numeric", // Shows number keyboard on mobile
                pattern: "[0-9]*", // Ensures only numbers
              }}
              style={{
                flexGrow: 1,
                fontWeight: 900,
                border: '1px solid #ccc',
                borderRadius: 0,
                fontSize: '10px',
                fontFamily: 'Arima Madurai, -apple-system, Helvetica, sans-serif'
              }}
              sx={{
                "& fieldset": { border: 'none' },
                borderRadius: 0
              }}
            />
            <Button onClick={() => checkRegStatusByAadhar()}>CHECK STATUS</Button>
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
              <WorkspacePremiumIcon className={styles.icon} />
              <h3 style={{ margin: 0 }}>Upcoming Events</h3>
            </div>
            <a href="/" className={styles.viewAll}>
              VIEW ALL <ArrowForwardIcon style={{ height: 14 }} />
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
        <div className={styles.footerHeaderHolder}>
          <Typography style={{ fontSize: 40, fontWeight: 100, lineHeight: 1, marginTop: '5%' }} className={styles.footerHeading}>a divine experience</Typography>
        </div>
        <div className={styles.footerDecorHolder}><img height={100} src={"../images/status-card-footer-decor.png"} /></div>
      </div>
    </>
  );
};

export default RegistrationStatusCard;
