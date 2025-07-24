import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import "./QRScanner.css";
import axios_instance from "@/app/utils/axiosInstance";
import APP_CONFIG from "@/app/utils/config";
import "./DialogBox.css";

const QRScanner = () => {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const qrScannerRef = useRef<QrScanner | null>(null);

  const [decodedData, setDecodedData] = useState<any>(null);
  const [dialog, setDialog] = useState<{
    message: string;
    type: "loading" | "success" | "error" | "info";
    showMarkButton?: boolean;
  } | null>(null);
  const [scanLocked, setScanLocked] = useState(false);

  const checkEventToday = async (eventId: number, dayId: number) => {
    setDialog({ message: "Checking event validity...", type: "loading" });
    try {
      const response = await axios_instance.get(
        `${APP_CONFIG.apiBaseUrl}/check-event/${eventId}/${dayId}`
      );
      const result = response.data;

      if (result?.ok) {
        setDialog({
          message: "Event is valid for today. Please review details and mark attendance.",
          type: "info",
          showMarkButton: true
        });
      } else {
        setDialog({
          message: result.message || "No event scheduled for today",
          type: "error"
        });
      }
    } catch (error: any) {
      setDialog({
        message: error?.response?.data?.message || "Error checking event validity",
        type: "error"
      });
    }
  };

  const markAttendance = async () => {
    if (!decodedData) return;

    setDialog({ message: "Marking attendance...", type: "loading" });
    try {
      const response = await axios_instance.post(
        `${APP_CONFIG.apiBaseUrl}/mark-attendance`,
        decodedData
      );
      const resultData = response?.data;

      if (resultData?.ok) {
        setDialog({ message: resultData.message, type: "success" });
      } else if (response.status === 409) {
        setDialog({
          message: `Attendance already marked${decodedData?.registeredAt ? ` on ${new Date(decodedData.registeredAt).toLocaleString()}` : ""}`,
          type: "error",
          showMarkButton: false
        });
      } else {
        setDialog({
          message: resultData.message || "Failed to mark attendance",
          type: "error"
        });
      }
    } catch (error: any) {
      setDialog({
        message: error?.response?.data?.message || "Error marking attendance",
        type: "error"
      });
    }
  };

  useEffect(() => {
    if (!videoElementRef.current) return;

    const video = videoElementRef.current;
    const qrScanner = new QrScanner(
      video,
      async (result) => {
        if (scanLocked) return;
        setScanLocked(true);

        try {
          const decodedJson = JSON.parse(atob(result.data));
          setDecodedData(decodedJson);
          await checkEventToday(decodedJson.eventId, decodedJson.dayId);
        } catch {
          setDialog({ message: "Invalid QR code format", type: "error" });
        }
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    qrScanner.start();
    qrScannerRef.current = qrScanner;

    return () => {
      qrScanner.stop();
      qrScanner.destroy();
    };
  }, [scanLocked]);

  const handleScanNext = () => {
    setDialog(null);
    setDecodedData(null);
    setScanLocked(false);
  };

  return (
    <div>
      <div className="videoWrapper">
        <video className="qrVideo" ref={videoElementRef} />
      </div>

      {dialog && (
        <div className="dialogOverlay">
          <div className={`dialogBox ${dialog.type}`}>
            <div className="dialogContent">
              {dialog.type === "loading" && <div className="loader"></div>}

              {dialog.type === "error" && dialog.message.includes("not today") && decodedData?.eventDate ? (
                <h2 className="dialogTitle">
                  You are registered for this event, but today is not the scheduled date.
                  <br />
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    Come back on: {decodedData.eventDate}
                  </span>
                </h2>
              ) : (
                <h2 className="dialogTitle">{dialog.message}</h2>
              )}

              {decodedData && (
                <div className="decodedDetails">
                  <h3>Main Details</h3>
                  <ul>
                    <li><strong>Name:</strong> {decodedData.attendeeName}</li>
                    <li><strong>Age:</strong> {decodedData.attendeeAge}</li>
                    <li><strong>Registration Type:</strong> {decodedData.regType}</li>
                    <li><strong>Phone:</strong> {decodedData.attendeePhone}</li>
                    <li><strong>Event Date:</strong> <span style={{ color: "red" }}>{decodedData.eventDate || "N/A"}</span></li>
                  </ul>

                  <h4>Additional Details</h4>
                  <table>
                    <tbody>
                      {Object.entries(decodedData)
                        .filter(([key]) =>
                          ![
                            "attendeeName",
                            "attendeeAge",
                            "regType",
                            "attendeePhone",
                            "eventDate",
                            "dayId"
                          ].includes(key)
                        )
                        .map(([key, value]) => (
                          <tr key={key}>
                            <td><strong>{key}</strong></td>
                            <td>{String(value)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              )}

              {dialog.showMarkButton && (
                <button className="primaryBtn" onClick={markAttendance}>
                  Mark Attendance
                </button>
              )}

              {dialog.type !== "loading" && !dialog.showMarkButton && (
                <button className="secondaryBtn" onClick={handleScanNext}>
                  Scan Next QR
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
