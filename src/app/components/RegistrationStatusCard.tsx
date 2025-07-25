"use client";
import React, { useState } from "react";
import styles from "./RegistrationStatusCard.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Button, TextField, Typography } from "@mui/material";
import { getStatusByAadhar } from "../services/registrationService";
import { useNotification } from "../context/NotificationContext";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button as MuiButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

interface Event {
  date: string;
  time: string;
  title: string;
  image: string;
}
interface RegistrationDetails {
  attendeeName: string;
  approvalStatus: string;
  eventDate: string;
  aadharNumber: string;
  attendeePhone: string;
  attendeeAge: number;
}

const events: Event[] = [
  {
    date: "10/03/2025",
    time: "06.30 am",
    title: "Golder Deer Vahanam",
    image: "/images/golden-deer.jpg",
  },
  {
    date: "10/03/2025",
    time: "07.30 pm",
    title: "Silver Vrushabha Vahanam",
    image: "/images/silver-vrushabha.jpeg",
  },
  {
    date: "10/03/2025",
    time: "06.30 pm",
    title: "Silver Deer Vahanam",
    image: "/images/silver-deer.jpg",
  },
];

const RegistrationStatusCard: React.FC = () => {
  const { showError } = useNotification();
  const [aadharNumber, setAadharNumber] = useState<string>("");
  const [registrationStatus, setRegistrationStatus] = useState<string>("--");
  const [registrationDate, setRegistrationDate] = useState<string>("--");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [regDetails, setRegDetails] = useState<RegistrationDetails | null>(
    null
  );
  const [openDialog, setOpenDialog] = useState(false);

  const checkRegStatusByAadhar = async () => {
    try {
      setIsLoading(true);
      const res = await getStatusByAadhar(aadharNumber);
      setRegistrationStatus(res.data.approvalStatus);
      setRegistrationDate(res.data.eventDate);
      setRegDetails(res.data); 
      console.log("chekcinnn", res.data);
      setOpenDialog(true);
    } catch (e: any) {
      showError(e?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

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
              type="text" 
              inputProps={{
                maxLength: 12,
                inputMode: "numeric", 
                pattern: "[0-9]*", 
              }}
              style={{
                flexGrow: 1,
                fontWeight: 900,
                border: "1px solid #ccc",
                borderRadius: 0,
                fontSize: "10px",
                fontFamily:
                  "Arima Madurai, -apple-system, Helvetica, sans-serif",
              }}
              sx={{
                "& fieldset": { border: "none" },
                borderRadius: 0,
              }}
              onChange={handleAadharChange}
            />
            <Button
              disabled={isLoading || (!isLoading && aadharNumber.length !== 12)}
              onClick={() => checkRegStatusByAadhar()}
            >
              {isLoading ? "Loading..." : "CHECK STATUS"}
            </Button>
          </div>
          {/* Scheduled Status */}
          {!isLoading && (
            <div className={styles.scheduledStatus}>
              <CalendarMonthIcon className={styles.icon} />
              <div>
                <Typography className={styles.statusLabel}>
                  {registrationStatus}
                </Typography>
                <Typography
                  style={{ fontWeight: 700, fontSize: "10px" }}
                  className={styles.date}
                >
                  {registrationDate}
                </Typography>
                <Typography
                  style={{ fontWeight: 700, fontSize: "10px" }}
                  className={styles.time}
                >
                  07.30 PM
                </Typography>
              </div>
            </div>
          )}
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
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={event.date + event.title + index}
              >
                <Card
                  className={styles.eventCard}
                  sx={{
                    height: 230,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 2,
                  }}
                >
                  {/* Image (small height) */}
                  <Box sx={{ height: 100, width: 100, overflow: "hidden" }}>
                    <img
                      src={event.image || "/images/default-event.jpg"}
                      alt={event.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {event.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5, fontSize: "0.8rem" }}
                    >
                      {event.date} | {event.time}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <div className={styles.statusCardFooterWrapper}>
        <div className={styles.footerHeaderHolder}>
          <Typography
            style={{
              fontSize: 40,
              fontWeight: 100,
              lineHeight: 1,
              marginTop: "5%",
            }}
            className={styles.footerHeading}
          >
            a divine experience
          </Typography>
        </div>
        <div className={styles.footerDecorHolder}>
          <img src={"../images/status-card-footer-decor.png"} />
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <InfoOutlinedIcon color="primary" /> Registration Details
        </DialogTitle>

        <DialogContent dividers>
          {regDetails ? (
            <Box sx={{ p: 1 }}>
              <Typography gutterBottom sx={{ mb: 2 }}>
                Hello <strong>{regDetails.attendeeName}</strong>, your
                registration is{" "}
                <strong style={{ color: "#8B0000" }}>
                  {registrationStatus.toUpperCase()}
                </strong>{" "}
                {registrationStatus.toUpperCase() === "PENDING"
                  ? "Please wait for confirmation. You will receive an email with more details shortly." :""}
                {registrationStatus.toUpperCase() === "APPROVED"
                  ? "Thank you for Registering." :""}
                {registrationStatus.toUpperCase() === "REJECTED"
                  ? "Please Contact Admin." :""}
                
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <BadgeOutlinedIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  <strong>Aadhaar:</strong> {regDetails.aadharNumber}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PhoneIphoneIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  <strong>Phone:</strong> {regDetails.attendeePhone}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PersonOutlineIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  <strong>Age:</strong> {regDetails.attendeeAge} years
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <CalendarTodayIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  <strong>Event Date:</strong> {registrationDate}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <EventAvailableIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  <strong>Status:</strong> {registrationStatus}
                </Typography>
              </Box>
            </Box>
          ) : (
            <Typography>No details found.</Typography>
          )}
        </DialogContent>

        <DialogActions>
          <MuiButton
            variant="contained"
            onClick={() => setOpenDialog(false)}
            color="primary"
          >
            Close
          </MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegistrationStatusCard;
