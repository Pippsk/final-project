import React, { useEffect, useState } from "react";
import { useAuthContext } from "../Auth/AuthContext";

import styles from "./Profile.module.css";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div className={styles.profile_container}>
      <form>
        <div>
          <h1>My Profile</h1>
        </div>
        <div className={styles.field}>
          <label htmlFor="email"> Email</label>
          <input type="email" id="email" value={user.email} />
        </div>
        <div className={styles.field}>
          <label htmlFor="password"> Password</label>
          <input type="password" id="password" value={user.password} />
        </div>
        <div className={styles.field}>
          <label htmlFor="retypePassword"> Password</label>
          <input
            type="password"
            id="retypePassword"
            value={user.retypePassword}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="firstName"> First name</label>
          <input type="text" id="firstName" value={user.firstName} />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName"> Last Name</label>
          <input type="text" id="lastName" value={user.lastName} />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>

          <input type="tel" id="phone" value={user.phone} />
        </div>

        <button type="submit" className={styles.add_product}>
          Change Infos
        </button>
      </form>
    </div>
  );
};

export default Profile;
