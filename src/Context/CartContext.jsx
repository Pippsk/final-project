import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from "../Pages/Auth/AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);

  const { user } = useAuthContext();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      setTotalItems(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = {
      ...product,
      amount: 1,
      userId: user.id,
    };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  console.log(cart);

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem.amount > cartItem.stock - 1) {
      return;
    }
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        }
      });

      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeItem(id);
    }
    console.log(cartItem);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
        totalItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
