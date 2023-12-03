import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const BrandNavLink = ({ children, ...props }) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) => (isActive ? styles.active_link : undefined)}
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <nav>
      <div className={styles.nav_center}>
        <Link to="/" className={styles.logo}>
          LOGO
        </Link>
        <ul className={styles.links_container}>
          <li>
            <BrandNavLink to="/products">Products</BrandNavLink>
          </li>

          <li>
            <BrandNavLink to="/about">About Us</BrandNavLink>
          </li>

          <li>
            <BrandNavLink to="/services">Services</BrandNavLink>
          </li>

          <li>
            <BrandNavLink to="/contact">Contact</BrandNavLink>
          </li>
        </ul>
        <div className={styles.buttons_container}>
          <Link to="login" className={styles.btn}>
            Log In
          </Link>
          <Link to="register" className={styles.btn}>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
