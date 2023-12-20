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
          Bine ai venit la ComfortZone - magazinul online de mobilă care
          transformă visele tale de amenajare în realitate! Cu o gamă
          diversificată de mobilier de cea mai înaltă calitate și cele mai
          recente trenduri în design interior, suntem aici pentru a aduce un
          plus de eleganță și confort în casa ta.
        </p>
        <button className={styles.btn}>
          <Link to="/products">Shop Now</Link>
        </button>
      </section>

      <img src={homeImg} alt="" />
    </div>
  );
};

export default Hero;
