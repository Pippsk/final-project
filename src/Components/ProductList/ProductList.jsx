import React from "react";
import Product from "../../Components/Product/Product";
import styles from "./ProductList.module.css";
import { useProductsContext } from "../../Context/ProductsContext";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { products } = useProductsContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get("category");

  const displayedCategories = categoryFilter
    ? products.filter(
        (product) => product.category.toLowerCase() === categoryFilter
      )
    : products;
  return (
    <div className={styles.product_list}>
      {displayedCategories.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
