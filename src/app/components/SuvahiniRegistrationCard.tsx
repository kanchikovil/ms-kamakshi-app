"use client";
import * as React from "react";
import styles from "./Suvahini.module.css";
import { SuvahiniHeader } from "./SuvahiniHeader";
import { RegisterButton } from "./RegisterButton";

function SuvahiniRegistrationCard() {
  const handleRegister = React.useCallback(() => {
    // Handle registration logic
    console.log("Registration clicked");
  }, []);

  return (
    <section className={styles.suvahini}>
      <div className={styles.suvahinicontent}>
        <SuvahiniHeader />
        <RegisterButton onClick={handleRegister} />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bba114635f39bd78cf1a907b77bfc33156ccbc?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        alt=""
        className={styles.img}
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be30c0031cfa2a7b3739af5622f81d6f76a0536?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        alt=""
        className={styles.img2}
      />
    </section>
  );
}

export default SuvahiniRegistrationCard;
