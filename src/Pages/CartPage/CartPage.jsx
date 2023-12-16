import React from "react";
import { useCartContext } from "../../Context/CartContext";
import CartItem from "../../Components/CartItem/CartItem";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, clearCart, total } = useCartContext();
  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}

          <div className={styles.total}>
            <p>Total: ${total}</p>
            <div className={styles.delete_icon} onClick={clearCart}>
              Clear cart
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty_cart}>
          <h1>Your cart is empty!</h1>
          <Link to="/products">
            <h3>Fill It!</h3>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartPage;
