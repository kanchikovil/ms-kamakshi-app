"use client";
import React from "react";
import styles from "./ForAfterAadharValidation.module.css";
import { NavHeader } from "./NavHeader";
import { RegistrationBand } from "./RegistrationBand";
import { InstructionsPanel } from "./InstructionsPanel";
import { RegistrationForm } from "./RegistrationForm";
import { Footer } from "./Footer";

const ForAfterAadharValidation: React.FC = () => {
  return (
    <main className={styles.container}>
      <NavHeader />
      <RegistrationBand />
      <div className={styles.content}>
        <div className={styles.columns}>
          <aside className={styles.instructionsColumn}>
            <InstructionsPanel />
          </aside>
          <section className={styles.formColumn}>
            <RegistrationForm />
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ForAfterAadharValidation;
