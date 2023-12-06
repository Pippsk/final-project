import React from "react";
import styles from "./Profile.module.css";
import profileImg from "../../assets/profile-img.png";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { IoMdKey } from "react-icons/io";
import { TbDoorExit } from "react-icons/tb";

const Profile = () => {
  return (
    <div className={styles.profile_container}>
      <aside>
        <img src={profileImg} alt="profile image" width="100px" />
        <ul>
          <li>
            <NavLink className={styles.profile_li}>
              {" "}
              <IoHome className={styles.icon} />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.profile_li}>
              <MdAccountBox className={styles.icon} />
              <p>Account Details</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.profile_li}>
              <IoMdKey className={styles.icon} />
              <p>Change Password</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.profile_li}>
              <TbDoorExit className={styles.icon} />
              <p>Log Out</p>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Profile;
