import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'm a backend developer with experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have experience building responsive sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloudIcon.png")} alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>AWS Cloud Infrastructure</h3>
              <p>
              I possess expertise with AWS services, optimizing cloud infrastructure for performance and scalability.
              </p>
            </div>
          </li>
           
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/engIcon.png")} alt="Eng icon" />
            <div className={styles.aboutItemText}>
              <h3>CI/CD Implementation and Management</h3>
              <p>
              Additionally, I have implemented and managed CI/CD pipelines to automate and streamline the development and deployment processes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
