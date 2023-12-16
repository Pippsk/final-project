import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({ id, name, image }) => {
  return (
    <div className={styles.product_container}>
      <img src={image} alt={name} />
      <div className={styles.product_info}>
        <h4>{name}</h4>
        <span>
          <Link to={`/products/${id}`}> Details</Link>
        </span>
      </div>
    </div>
  );
};

export default Product;
