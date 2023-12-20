import { React } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthContext } from "../../Pages/Auth/AuthContext";
import profileImg from "../../assets/profile-img.png";
import styles from "./Navbar.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCartContext } from "../../Context/CartContext";

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
  const { totalItems } = useCartContext();
  return (
    <nav>
      <div className={styles.nav_center}>
        <Link to="/" className={styles.logo}>
          ComfortZone
        </Link>
        <ul className={styles.links_container}>
          <li>
            <BrandNavLink to="/">Home</BrandNavLink>
          </li>
          <li>
            <BrandNavLink to="/products">Products</BrandNavLink>
          </li>

          <li>
            <BrandNavLink to="/about">About Us</BrandNavLink>
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
          <div className={styles.profile_section}>
            <div className={styles.cart_container}>
              <Link to="/cart" className={styles.cart_link}>
                <span className={styles.cart_wrapper}>
                  <RiShoppingCartLine />
                  <span className={styles.cart_value}>{totalItems}</span>
                </span>
              </Link>
            </div>

            <Link to="/profile" className={styles.profile_link}>
              <img src={profileImg} alt="" className={styles.profile_img} />{" "}
              <p>
                {user.lastName} {user.firstName}
              </p>
            </Link>

            <button
              className={styles.logout}
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              <Link to="/">Sign Out</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
