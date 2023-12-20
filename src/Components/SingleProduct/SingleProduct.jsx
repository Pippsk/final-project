import React, { useEffect } from "react";
import styles from "./SingleProduct.module.css";
import { productsUrl } from "../../Utils/constants";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductsContext";
import { useAuthContext } from "../../Pages/Auth/AuthContext";
import { useCartContext } from "../../Context/CartContext";
const SingleProduct = () => {
  const { id } = useParams();
  const { addToCart } = useCartContext();
  const { user } = useAuthContext();

  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    getSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    getSingleProduct(`${productsUrl}${id}`);
  }, [id]);

  if (singleProductLoading) {
    return <div>loading...</div>;
  }

  if (singleProductError) {
    return <div>There has been an error</div>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.single_product_container}>
        <img src={singleProduct.image} alt="" />
        <div className={styles.details}>
          <h1>{singleProduct.name}</h1>
          <span className={styles.price}>${singleProduct.price}</span>
          <p>{singleProduct.description}</p>
          <section>
            <div>
              <span>Available:</span>
              <p>
                {singleProduct.stock > 0
                  ? `${singleProduct.stock} products `
                  : "Out of stock"}
              </p>
            </div>
            <div>
              <span>Brand:</span>
              <p>{singleProduct.company}</p>
            </div>
          </section>

          <div className={styles.add_to_cart}>
            <button
              className={styles.add_btn}
              onClick={() => addToCart(singleProduct, singleProduct.id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
