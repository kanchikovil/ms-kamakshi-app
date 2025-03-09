import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
import "./QRScanner.css";
import axios_instance from "@/app/utils/axiosInstance";
import APP_CONFIG from "@/app/utils/config";
import { useNotification } from "@/app/context/NotificationContext";

const QRScanner = () => {
  const videoElementRef = useRef<HTMLVideoElement | null>(null);
  const [scanned, setScannedText] = useState("");
  const { showError, showSuccess } = useNotification();

  const markAttendance = async (qrData: string) => {
    try {
      const response = await axios_instance.post(
        APP_CONFIG.apiBaseUrl + "/mark-attendance",
        { data: qrData }
      );

      const resultData = response?.data;

      if (resultData?.ok) {
        showSuccess(resultData.message);
      } else {
        showError(`Failed to mark attendance: ${resultData.message}`);
      }
    } catch (error) {
      console.error("Error marking attendance:", error);
      showError("Error marking attendance. Please try again.");
    }
  };

  useEffect(() => {
    if (!videoElementRef.current) return; // ✅ Prevents null error

    const video = videoElementRef.current;
    const qrScanner = new QrScanner(
      video,
      async (result) => { // ✅ Make callback async
        console.log("Decoded QR code:", result);
        setScannedText(result.data);
        await markAttendance(result.data); // ✅ Await inside async function
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    qrScanner.start();
    console.log("QR Scanner started");

    return () => {
      console.log("Stopping scanner...");
      qrScanner.stop();
      qrScanner.destroy();
    };
  }, []);

  return (
    <div>
      <div className="videoWrapper">
        <video className="qrVideo" ref={videoElementRef} />
      </div>
      <p className="scannedText">SCANNED: {scanned}</p>
    </div>
  );
};

export default QRScanner;
