"use client";
import React, { useState } from "react";
import styles from "./RegistrationStatusCard.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Button, TextField, Typography } from "@mui/material";
import { getStatusByAadhar } from '../services/registrationService';
import { useNotification } from "../context/NotificationContext";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

interface Event {
  date: string;
  time: string;
  title: string;
  image: string;
}

const events: Event[] = [
  { date: "10/03/2025", time: "06.30 am", title: "Golder Deer Vahanam", image: "/images/golden-deer.jpg" },
  { date: "10/03/2025", time: "07.30 pm", title: "Silver Vrushabha Vahanam", image: "/images/silver-vrushabha.jpeg" },
  { date: "10/03/2025", time: "06.30 pm", title: "Silver Deer Vahanam", image: "/images/silver-deer.jpg" },
];

const RegistrationStatusCard: React.FC = () => {

  const { showError } = useNotification();
  const [aadharNumber, setAadharNumber] = useState<string>('');
  const [registrationStatus, setRegistrationStatus] = useState<string>('--');
  const [registrationDate, setRegistrationDate] = useState<string>('--');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [regDetails, setRegDetails] = useState();

  const checkRegStatusByAadhar = async () => {
    try {
      setIsLoading(true);
      const res = await getStatusByAadhar(aadharNumber);
      setRegistrationStatus(res.data.approvalStatus);
      setRegistrationDate(res.data.eventDate);
      console.log(res.data);
    } catch (e: any) {
      showError(e?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAadharChange = (event: any) => {
    const { value } = event.target;

    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");

    // Validate Aadhaar length
    // if (numericValue.length > 0 && numericValue.length !== 12) {
    //   showError("Aadhaar number must be exactly 12 digits.");
    //   return;
    // }
    setAadharNumber(numericValue);
  };

  return (
    <>
      <section className={styles.cardContainer}>
        {/* Registration Check Section */}
        <h2 className={styles.title}>Check your registration status</h2>
        <div className={styles.registrationCheck}>
          <div className={styles.inputGroup}>
            <TextField
              disabled={isLoading}
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
              onChange={handleAadharChange}
            />
            <Button disabled={isLoading || (!isLoading && aadharNumber.length !== 12)} onClick={() => checkRegStatusByAadhar()}>{isLoading ? "Loading..." : "CHECK STATUS"}</Button>
          </div>
          {/* Scheduled Status */}
          {!isLoading &&
            <div className={styles.scheduledStatus}>
              <CalendarMonthIcon className={styles.icon} />
              <div>
                <Typography className={styles.statusLabel}>{registrationStatus}</Typography>
                <Typography style={{ fontWeight: 700, fontSize: '10px' }} className={styles.date}>{registrationDate}</Typography>
                <Typography style={{ fontWeight: 700, fontSize: '10px' }} className={styles.time}>07.30 PM</Typography>
              </div>
            </div>
          }
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

          {/* <ul className={styles.eventList}>
            {events.map((event, index) => (
              <li key={index} className={styles.eventItem}>
                <span className={styles.eventDate}>{event.date}</span>
                <span className={styles.eventTime}>{event.time}</span>
                <span className={styles.eventTitle}>{event.title}</span>
              </li>
            ))}
          </ul> */}
          <Grid container spacing={2} className={styles.eventList}>
            {events.map((event, index) => (
              <Grid item xs={12} sm={4} key={event.date + event.title + index}>
                <Card className={styles.eventCard} variant="outlined" sx={{ minHeight: 160, display: 'flex', flexDirection: 'column' }}>
                  {/* Event Image */}
                  <img
                    src={event.image || "/images/default-event.jpg"}
                    alt={event.title}
                    style={{ width: '100%', height: 100, objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                  />
                  <CardHeader
                    title={event.title}
                    // subheader={`${event.date} | ${event.time}`}
                    titleTypographyProps={{ fontSize: 16, fontWeight: 700 }}
                    subheaderTypographyProps={{ fontSize: 13 }}
                    sx={{ pt: 1, pb: 0.5 }}
                  />
                  <CardContent sx={{ pt: 0 }}>
                    {`${event.date} | ${event.time}`}
                    {/* You can add more event details here if needed */}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <div className={styles.statusCardFooterWrapper}>
        <div className={styles.footerHeaderHolder}>
          <Typography style={{ fontSize: 40, fontWeight: 100, lineHeight: 1, marginTop: '5%' }} className={styles.footerHeading}>a divine experience</Typography>
        </div>
        <div className={styles.footerDecorHolder}><img src={"../images/status-card-footer-decor.png"} /></div>
      </div>
    </>
  );
};

export default RegistrationStatusCard;
