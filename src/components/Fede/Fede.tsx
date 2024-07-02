import React from "react";

import styles from "./Fede.module.css";
import { getImageUrl } from "../../utils";

export const Fede = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Fede</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:federicoqueirel@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("fede/fede.png")}
        alt="Hero image of me"
        className={styles.fedeImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
