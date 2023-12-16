import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import styles from "./Products.module.css";

const Products = () => {
  return (
    <div className={styles.products_container}>
      <ProductList />
    </div>
  );
};

export default Products;
