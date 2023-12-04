import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import { useAuthContext } from "../../Pages/Auth/AuthContext";

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
  const { user, logout } = useAuthContext();

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
        {user === null && (
          <div className={styles.buttons_container}>
            <Link to="login" className={styles.btn}>
              Log In
            </Link>
            <Link to="register" className={styles.btn}>
              Register
            </Link>
          </div>
        )}

        {user && (
          <div className={styles.buttons_container}>
            <p className={styles.welcome}>
              <Link>Welcome {user.firstName}!</Link>
            </p>
            <Link to="login">
              <button
                className={styles.btn}
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                Sign Out
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
