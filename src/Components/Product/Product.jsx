import React from "react";
import styles from "./Product.module.css";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductsContext";
import { useAuthContext } from "../../Pages/Auth/AuthContext";

const Product = ({ id, name, image }) => {
  const { deleteItem } = useProductsContext();
  const { user } = useAuthContext();

  return (
    <div className={styles.product_container}>
      <img src={image} alt={name} />
      <div className={styles.product_info}>
        <h4>{name}</h4>
        <span>
          <Link to={`/products/${id}`}> Details</Link>
        </span>
      </div>
      {user && (
        <button className={styles.remove_item} onClick={() => deleteItem(id)}>
          Remove{" "}
        </button>
      )}
    </div>
  );
};

export default Product;
