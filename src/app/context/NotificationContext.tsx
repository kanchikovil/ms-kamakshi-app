import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationContextProps {
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showWarning: (message: string) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<NotificationType>("info");

  const showNotification = (msg: string, type: NotificationType) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  const showSuccess = (msg: string) => showNotification(msg, "success");
  const showError = (msg: string) => showNotification(msg, "error");
  const showWarning = (msg: string) => showNotification(msg, "warning");

  return (
    <NotificationContext.Provider value={{ showSuccess, showError, showWarning }}>
      {children}
      <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ height: 200, width: 400, flexGrow: 0 }}
        ContentProps={{
          sx: {
            backgroundColor: severity === "success" ? "#4caf50" : severity === "error" ? "#f44336" : severity === "warning" ? "#ff9800" : "#2196f3",
            color: "#fff",
            fontSize: "2rem",
            padding: "16px",
            borderRadius: "8px",
          },
        }}
        >
        <Alert onClose={() => setOpen(false)} severity={severity} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextProps => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
