"use client";
import * as React from "react";
import styles from "./Suvahini.module.css";

interface RegisterButtonProps {
  onClick?: () => void;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.registerbutton}>
      REGISTER
    </button>
  );
};
