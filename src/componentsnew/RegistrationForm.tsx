"use client";
import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    date: "",
    contactNumber: "",
    girlName: "",
    age: "",
    standard: "",
    nativePlace: "",
    horoscopeName: "",
    stotram: "",
    classicalMusic: "",
    motherTongue: "",
    fatherName: "",
    maternalGothram: "",
    fatherGothram: "",
    fatherVedam: "",
    fatherProfession: "",
    motherGothram: "",
    motherVedam: "",
    motherProfession: "",
    kulaDevatha: "",
    place: "",
    address: "",
    dressSize: "",
    legChainSize: "",
    bangleSize: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formFields}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="date" className={styles.label}>
              Date
            </label>
            <div className={styles.dateInput}>
              <input
                type="date"
                id="date"
                className={styles.input}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2440dc02d8288da65e8a512e5b05e6024c93675d?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
                alt="Calendar"
                className={styles.calendarIcon}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="contactNumber" className={styles.label}>
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              className={styles.input}
              value={formData.contactNumber}
              onChange={(e) =>
                setFormData({ ...formData, contactNumber: e.target.value })
              }
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="girlName" className={styles.label}>
              Name of the girl*
            </label>
            <input
              type="text"
              id="girlName"
              className={styles.input}
              required
              value={formData.girlName}
              onChange={(e) =>
                setFormData({ ...formData, girlName: e.target.value })
              }
            />
          </div>
        </div>

        {/* Size Selection Section */}
        <div className={styles.sizesSection}>
          <div className={styles.sizeGroup}>
            <h4 className={styles.sizeTitle}>Girl Dress Size in inches</h4>
            <div className={styles.sizeGrid}>
              {[16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`${styles.sizeButton} ${
                    formData.dressSize === size.toString()
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, dressSize: size.toString() })
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.sizeGroup}>
            <h4 className={styles.sizeTitle}>
              Leg Chain (Kolusu) Size in inches
            </h4>
            <div className={styles.sizeGrid}>
              {[
                "5.0",
                "6.0",
                "7.0",
                "8.0",
                "9.0",
                "10.0",
                "5.5",
                "6.5",
                "7.5",
                "8.5",
                "9.5",
                "10.5",
              ].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`${styles.sizeButton} ${
                    formData.legChainSize === size ? styles.selected : ""
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, legChainSize: size })
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.sizeGroup}>
            <h4 className={styles.sizeTitle}>Bangle size in inches</h4>
            <div className={styles.sizeGrid}>
              {["1.8", "1.10", "1.12", "2.0", "2.2", "2.4", "2.6", "2.8"].map(
                (size) => (
                  <button
                    key={size}
                    type="button"
                    className={`${styles.sizeButton} ${
                      formData.bangleSize === size ? styles.selected : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, bangleSize: size })
                    }
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          REGISTER
        </button>
      </div>
    </form>
  );
};
