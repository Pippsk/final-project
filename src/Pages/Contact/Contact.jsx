import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactPage_container}>
      <form className={styles.contact_form}>
        <h1>Contact Us</h1>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea type="textarea" rows={4} placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>

      <img src="" alt="" />
    </div>
  );
};

export default Contact;
