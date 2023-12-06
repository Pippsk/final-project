import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({ id, name, image }) => {
  const url = "";
  return (
    <Link to={`http://localhost:3000/products/${id}`}>
      <div className={styles.product_container}>
        {" "}
        <img src={image} alt={name} />
        <div className={styles.product_info}>
          <h4>{name}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Product;
