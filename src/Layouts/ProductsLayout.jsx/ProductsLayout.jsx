import React from "react";
import styles from "./ProductsLayout.module.css";
import { Outlet } from "react-router-dom";
import Filters from "../../Components/Filters/Filters";

const ProductsLayout = () => {
  return (
    <div className={styles.grid_layout}>
      <Filters />
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
