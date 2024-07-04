import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

interface Project {
  project:{
  title: string;
  imageSrc: string;
  description: string;
  skills: string[]; 
  demo: string; 
  source: string;
}
}

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}: Project) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};
