import React from "react";
import styles from "./CartItem.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
  const { id, name, image, price, amount, stock } = item;

  const { removeItem, increaseAmount, decreaseAmount } = useCartContext();
  return (
    <div className={styles.cart_item_container}>
      <div className={styles.cart_image_container}>
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
      </div>

      <div className={styles.cart_item_details}>
        <div>
          <Link to={`/products/${id}`}>{name}</Link>
        </div>

        <div className={styles.amount_container}>
          <div className={styles.minus}>
            <IoMdRemove onClick={() => decreaseAmount(id)} />
          </div>
          <div>{amount > stock ? stock : amount}</div>
          <div className={styles.plus}>
            <IoMdAdd onClick={() => increaseAmount(id)} />
          </div>
        </div>

        <div>${price}</div>

        <div>${amount * price}</div>

        <div>
          <RiDeleteBin5Line
            className={styles.delete_icon}
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
