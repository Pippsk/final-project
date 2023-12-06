import React, { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import { useProductsContext } from "../../Context/ProductsContext";
import styles from "./Products.module.css";

const Products = () => {
  const {
    products,
    productsLoading: loading,
    productsError: error,
  } = useProductsContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There has been an error</div>;
  }

  // if (error) {
  //   return <div>There was an error!</div>;
  // }
  return (
    <div className={styles.products_container}>
      {products &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
};

export default Products;
