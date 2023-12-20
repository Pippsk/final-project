import React from "react";
import { useSearchParams } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductsContext";
import { Link, NavLink } from "react-router-dom";
import styles from "./Filters.module.css";
import { useAuthContext } from "../../Pages/Auth/AuthContext";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { products } = useProductsContext();

  const { user } = useAuthContext();

  function getUniqueCategories(database) {
    const categories = new Set();

    for (const product of database) {
      categories.add(product.category);
    }

    return Array.from(categories);
  }

  const productsCategories = getUniqueCategories(products);

  return (
    <main>
      <div className={styles.filters_container}>
        {user && (
          <Link to="/newproduct" className={styles.new_product_btn}>
            <button> Add New Product</button>
          </Link>
        )}
        <button
          className={styles.category}
          onClick={() => setSearchParams({ category: "" })}
        >
          All
        </button>
        {productsCategories.map((category) => (
          <button
            key={category}
            className={styles.category}
            onClick={() => setSearchParams({ category: `${category}` })}
          >
            {" "}
            {category}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Filters;
