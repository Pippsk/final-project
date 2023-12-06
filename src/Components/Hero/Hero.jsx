import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import homeImg from "../../assets/home-img.jpg";

const Hero = () => {
  return (
    <div className={styles.homePage_container}>
      <section className={styles.text_container}>
        <h1>Design your Comfort Zone</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          magni odit quibusdam! Saepe deleniti id in quis voluptatem dolorem
          animi suscipit aliquam tempora, ipsum impedit commodi, non at,
          asperiores numquam natus ab fugiat. Exercitationem, sequi in aliquid
          voluptate nobis et suscipit cupiditate tenetur tempore, natus
          quisquam, blanditiis eaque sed praesentium.
        </p>
        <button className={styles.btn}>
          <Link to="/products">Shop Now</Link>
        </button>
      </section>

      <section className={styles.image_container}>
        <img src={homeImg} alt="" />
      </section>
    </div>
  );
};

export default Hero;
