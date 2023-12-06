import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <h3>&copy; {new Date().getFullYear()} ComfortZone</h3>
    </div>
  );
};

export default Footer;
