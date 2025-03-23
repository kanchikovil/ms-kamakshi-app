"use client";
import React from "react";
import styles from "./LandingPage.module.css";
import { Header } from "./Header";
import { RegistrationCard } from "./RegistrationCard";
import { RegistrationStatus } from "./RegistrationStatus";
import { UpcomingEvents } from "./UpcomingEvents";
import { Footer } from "./Footer";

function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <Header />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b681e800e06d3cd4e48e9e84737f725b7db190a8?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
        alt="Banner"
        className={styles.bannerImage}
      />

      <section className={styles.registrationBand}>
        <h1>Navarathri Registration</h1>
      </section>

      <section className={styles.registrationSection}>
        <div className={styles.registrationGrid}>
          <RegistrationCard
            type="kanya"
            title="Kanya"
            subtitle="Child under age 10"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e36c9fb866e6edd8205d986cab59388008ab6caf?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            decorationSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bba114635f39bd78cf1a907b77bfc33156ccbc?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          />
          <RegistrationCard
            type="suvahini"
            title="Suvahini"
            subtitle="Elderly over 40 Years"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5be30c0031cfa2a7b3739af5622f81d6f76a0536?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
            decorationSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a0bba114635f39bd78cf1a907b77bfc33156ccbc?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
          />
          <div className={styles.rightColumn}>
            <RegistrationStatus />
            <UpcomingEvents />
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>
          <article className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed consectetur cursus
              nullam suspendisse volutpat lacinia odio. Dolor sapien consectetur
              et eget sagittis mauris pharetra pellentesque. Adipiscing orci dui
              pulvinar lectus adipiscing. Velit egestas amet suspendisse dolor
              vitae cursus. Lacus nunc adipiscing sit et ac ac. Mi volutpat in
              sed at egestas in. Consequat ac feugiat vitae semper sit
              adipiscing nec nisl quis. Platea interdum felis nunc porta amet
              cras morbi. Sollicitudin eget non proin fermentum et pretium.
            </p>
          </article>
          <aside className={styles.divineExperience}>
            <h2>
              a divine
              <br />
              experience
            </h2>
            <div className={styles.bellIcons}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/729d3b9005a31022e8af83defc884e962cc54d4b?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
                alt="Bell icon 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b9ca42dc3bee691610e15020d0df970108a8d01?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
                alt="Bell icon 2"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8ee005470ab8d42cea117db0f41428ad774232a?placeholderIfAbsent=true&apiKey=17b9fc3a306942ecb921488f6487528e"
                alt="Bell icon 3"
              />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default LandingPage;
