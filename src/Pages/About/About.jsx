import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <main>
      <div className={styles.container}>
        <article>
          <h1>Our Story</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            amet aut placeat exercitationem veniam rerum corrupti tempore
            voluptatum deleniti? Dolore, non illo? Inventore magni expedita amet
            excepturi, neque pariatur ipsa accusantium repellat incidunt dolor
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            amet aut placeat exercitationem veniam rerum corrupti tempore
            voluptatum deleniti? Dolore, non illo? Inventore magni expedita amet
            excepturi, neque pariatur ipsa accusantium repellat incidunt dolor
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            amet aut placeat exercitationem veniam rerum corrupti tempore
            voluptatum deleniti? Dolore, non illo? Inventore magni expedita amet
            excepturi, neque pariatur ipsa accusantium repellat incidunt dolor
          </p>
        </article>
        <img src={aboutImg} alt="furniture image" />
      </div>
    </main>
  );
};

export default About;
